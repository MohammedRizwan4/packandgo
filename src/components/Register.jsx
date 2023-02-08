import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { createPortal } from "react-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSuccess } from "../store/reducers/globalReducer";
import { useAuthRegisterMutation } from "../store/services/authService";
import toast, { Toaster } from "react-hot-toast";
import { setUserToken } from "../store/reducers/authReducer";
import { setIsLogin, setIsRegister } from "../store/reducers/toggleReducer";

const Register = ({ setOpenLogin }) => {
  const { isRegister } = useSelector((state) => state.toggleReducer);

  const [registerData, response] = useAuthRegisterMutation();
  console.log(response);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  const basicSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    password: yup
      .string()
      .min(5)
      .matches(passwordRules, { message: "Please create a stronger password" })
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .min(5)
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const onSubmit = async (values, actions) => {
    await registerData(values);
    // registerData(values)
    // actions.resetForm();
    // response?.isSuccess ? navigate("/login") : navigate("/register");
    dispatch(setIsRegister(false));
    dispatch(setIsLogin(true));
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  useEffect(() => {
    if (response?.isSuccess) {
      localStorage.setItem("login-token", response?.data?.token);
      //   dispatch(setUserToken(response?.data?.token))
      dispatch(setSuccess(response?.data?.msg));
      toast.success(response?.data?.msg, {
        style: {
          backgroundColor: "#393a3b",
          color: "white",
          padding: "16px",
        },
      });
      //   setTimeout(() => {
      //     setOpenRegister(!openRegister);
      //     setOpenLogin();
      //   }, 1000);
    //   setOpenRegister(!openRegister);
      setOpenLogin();
    }
  }, [response?.isSuccess]);

  useEffect(() => {
    if (response.isError) {
      toast.error(response?.error?.data?.errors[0].msg);
    }
  }, [response?.isError]);

  return createPortal(
    <>
      {isRegister && (
        <>
          <Toaster
            toastOptions={{ style: { fontSize: "2rem" } }}
            position="top-center"
            reverseOrder={true}
          />
          <RegComponent isRegister={isRegister}>
            <div className="closeIcon">
              <div className="title">Register</div>
              <HighlightOffIcon className="icon" onClick={() => dispatch(setIsRegister(false))}>
                close
              </HighlightOffIcon>
            </div>
            <div className="login">
              <form
                className="inputs"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <div className="input firstName">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    value={values.firstName}
                    id="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.firstName && touched.firstName ? "input-error" : ""
                    }
                    type="text"
                    placeholder="Enter your FirstName"
                  />
                  {errors.firstName && touched.firstName && (
                    <p className="error">{errors.firstName}</p>
                  )}
                </div>
                <div className="input lastName">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    value={values.lastName}
                    id="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.lastName && touched.lastName ? "input-error" : ""
                    }
                    type="text"
                    placeholder="Enter your LastName"
                  />
                  {errors.lastName && touched.lastName && (
                    <p className="error">{errors.lastName}</p>
                  )}
                </div>
                <div className="input email">
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
                <div className="input password">
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
                <div className="input confirmPassword">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    value={values.confirmPassword}
                    id="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.confirmPassword && touched.confirmPassword
                        ? "input-error"
                        : ""
                    }
                    type="password"
                    placeholder="Enter your Confirm Password"
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <p className="error">{errors.confirmPassword}</p>
                  )}
                </div>
                <button className="submit">Submit</button>
              </form>
            </div>
            <div className="googlelinks"></div>
          </RegComponent>
          <Opacity onClick={() => dispatch(setIsRegister(false))} />
        </>
      )}
    </>,
    document.getElementById("portal")
  );
};

export default Register;

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
  left: 0;
  z-index: 1999;
  background-color: rgba(0, 0, 0, .8);
`;
const RegComponent = styled.div`
  position: absolute;
  height: 90vh;
  width: 70vw;
  top: 0;
  background-color: white;
  z-index: 2000;
  top: 5vh;
  left: 15vw;
  animation: ${slideDown} 0.7s ease-in-out;
  padding: 4rem;
  opacity: ${(props) => props.isRegister ? "1" : "0"};
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
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "firstName lastName"
        "email email"
        "password password"
        "confirmPassword confirmPassword"
        "submit submit";
      grid-column-gap: 3rem;
      grid-row-gap: 2rem;
      .firstName {
        grid-area: firstName;
      }
      .lastName {
        grid-area: lastName;
      }
      .email {
        grid-area: email;
      }
      .password {
        grid-area: password;
      }
      .confirmPassword {
        grid-area: confirmPassword;
      }
      .input {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        gap: 1rem;
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
          width: 100%;
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
        margin-top: 2rem;
        grid-area: submit;
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

  @media (max-width: 875px) {
    .login {
      .inputs {
        grid-template-areas:
          "firstName firstName"
          "lastName lastName"
          "email email"
          "password password"
          "confirmPassword confirmPassword"
          "submit submit";
      }
    }
  }
`;
