import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { createPortal } from "react-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import * as yup from "yup";
import { useFormik } from "formik";
import { useAuthLoginMutation } from "../store/services/authService";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast, Toaster } from "react-hot-toast";
import { setSuccess } from "../store/reducers/globalReducer";
import { setUserToken } from "../store/reducers/authReducer";
import { setIsLogin } from "../store/reducers/toggleReducer";

// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const Login = ({ openLogin, setOpenLogin }) => {
  const { isLogin } = useSelector((state) => state.toggleReducer);
  const basicSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });
  const [loginData, response] = useAuthLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    loginData(values);
    // actions.resetForm();
    dispatch(setIsLogin(false));
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  useEffect(() => {
    if (response?.isSuccess) {
      if (response?.data?.token) {
        localStorage.setItem("login-token", response?.data?.token);
        console.log(response?.data?.token);
      }
      dispatch(setUserToken(response?.data?.token));
      toast.success("Logged In successfully", {
        style: {
          backgroundColor: "#393a3b",
          color: "white",
          padding: "16px",
        },
      });
      dispatch(setSuccess(response?.data?.msg));
      setTimeout(() => {
        setOpenLogin(false);
      }, 1000);
    }
  }, [response?.isSuccess]);

  useEffect(() => {
    if (response.isError) {
      toast.error(response?.error?.data?.errors[0].msg);
    }
  }, [response?.isError]);

  return createPortal(
    <>
      {isLogin && (
        <>
          <Toaster
            position="top-center"
            toastOptions={{ style: { fontSize: "2rem" } }}
            reverseOrder={true}
          />
          <RegComponent isLogin={isLogin}>
            <div className="closeIcon">
              <div className="title">Log In</div>
              <HighlightOffIcon
                className="icon"
                onClick={() => dispatch(setIsLogin(false))}
              >
                close
              </HighlightOffIcon>
            </div>
            <div className="login">
              <form
                className="inputs"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <div className="input">
                  <label htmlFor="email">Email</label>
                  <input
                    value={values.email}
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email ? "input-error" : ""
                    }
                    type="email"
                    placeholder="Enter your Email"
                  />
                  {errors.email && touched.email && (
                    <p className="error">{errors.email}</p>
                  )}
                </div>
                <div className="input">
                  <label htmlFor="password">Password</label>
                  <input
                    value={values.password}
                    id="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password ? "input-error" : ""
                    }
                    type="password"
                    placeholder="Enter your Password"
                  />
                  {errors.password && touched.password && (
                    <p className="error">{errors.password}</p>
                  )}
                </div>
                <button className="submit">Submit</button>
              </form>
            </div>
            <div className="googlelinks"></div>
          </RegComponent>
          <Opacity onClick={() => dispatch(setIsLogin(false))} />
        </>
      )}
    </>,
    document.getElementById("portal")
  );
};

export default Login;

const slideDown = keyframes`
  from {
    top: -100%;
  }
  to {
    top: 0;
  }
`;

const Opacity = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1999;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;
const RegComponent = styled.div`
  position: absolute;
  height: 70vh;
  width: 70vw;
  top: 0;
  background-color: white;
  z-index: 2000;
  top: 15vh;
  left: 15vw;
  opacity: ${(props) => (props.isLogin ? "1" : "0")};
  transition: all 0.5s ease-in-out;
  padding: 4rem;
  animation: ${slideDown} 0.7s ease-in-out;
  .closeIcon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      font-size: 4rem;
      cursor: pointer;
      color: #393a3b;
    }
    .title {
      font-size: 3rem;
      font-weight: 800;
      margin-left: 2rem;
    }
  }
  .login {
    .inputs {
      margin-top: 5rem;
      margin-left: 2rem;
      .input {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 4rem;
        .input-error {
          border: 2px solid red;
        }
        .error {
          font-size: 1.7rem;
          color: red;
        }
        label {
          font-size: 2.5rem;
          color: #393a3b;
          font-weight: bold;
        }
        input {
          padding: 1rem 2rem;
          outline: none;
          background-color: white;
          border: 2px solid #a6a4a1;
          font-size: 2.2rem;
          &:focus {
            border: 2px solid #383734;
            transition: all 0.3s ease-in-out;
          }
        }
      }
      .submit {
        padding: 1rem 3rem;
        font-size: 2rem;
        font-weight: 600;
        color: #383734;
        border: 2px solid #383734;
        background-color: white;
        &:hover {
          color: #a6a4a1;
          background-color: #383734;
          border: 2px solid #a6a4a1;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
        }
      }
    }
  }
`;
