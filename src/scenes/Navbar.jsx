import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Register from "../components/Register";
import Login from "../components/Login";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useSelector } from "react-redux";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logout } from "../store/reducers/authReducer";
import { setIsLogin, setIsRegister } from "../store/reducers/toggleReducer";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const { userToken, user } = useSelector((state) => state.authReducer);

  const [openLogin, setOpenLogin] = useState(false);
  let token;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      token = localStorage.getItem("token");
    } else {
      token = "";
    }
  }, [localStorage.getItem("token")]);

  const [navbarOpen, setNavbarOpen] = useState(false);

  const adminLogout = () => {
    toast.success("Logged Out Successfully", {
      style: {
        backgroundColor: "#393a3b",
        color: "white",
        padding: "16px",
      },
    });
    dispatch(logout("login-token"));
  };

  return (
    <>
      <Nav openLogin={openLogin}>
        <Toaster
          toastOptions={{ style: { fontSize: "2rem" } }}
          position="top-center"
          reverseOrder={true}
        />
        <div className="left">
          <div className="logo">PACK&GO</div>
        </div>
        <div className="right">
          <div className="links">
            <ul>
              <Link to="/">
                <li>
                  <a href="#">HOME</a>
                </li>
              </Link>
              <Link to="/theme" id="theme">
                <li id="theme">
                  <a href="#">THEMES</a>
                </li>
              </Link>
              <div className="theme_big">
                <ul>
                  <Link to="/theme1">
                    <li>
                      <a href="#">Theme1</a>
                    </li>
                  </Link>
                  <Link to="/theme2">
                    <li>
                      <a href="#">Theme2</a>
                    </li>
                  </Link>
                  <Link to="/theme3">
                    <li>
                      <a href="#">Theme3</a>
                    </li>
                  </Link>
                  <Link to="/theme4">
                    <li>
                      <a href="#">Theme4</a>
                    </li>
                  </Link>
                </ul>
              </div>
              <Link to="/contactus">
                <li>
                  <a href="#">CONTACT US</a>
                </li>
              </Link>
              <Link to="/aboutus">
                <li>
                  <a href="#">ABOUT US</a>
                </li>
              </Link>
            </ul>
          </div>
          <div className="buttons">
            {userToken ? (
              <button onClick={adminLogout}>LOGOUT</button>
            ) : (
              <>
                <button onClick={() => dispatch(setIsRegister(true))}>
                  REGISTER
                </button>
                <button onClick={() => dispatch(setIsLogin(true))}>
                  LOGIN
                </button>
              </>
            )}
          </div>
        </div>
        <div className="menu">
          {!navbarOpen ? (
            <MenuRoundedIcon
              className="icon"
              onClick={() => setNavbarOpen(!navbarOpen)}
            />
          ) : (
            <CancelOutlinedIcon
              className="icon"
              onClick={() => setNavbarOpen(!navbarOpen)}
            />
          )}
        </div>
        {navbarOpen && (
          <div className="listMenu">
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li id="theme">
                <a href="#">THEME</a>
              </li>
              <div className="hide">
                <ul>
                  <li>
                    <a href="#">Top Packages</a>
                  </li>
                  <li>
                    <a href="#">Top Packages</a>
                  </li>
                  <li>
                    <a href="#">Top Packages</a>
                  </li>
                  <li>
                    <a href="#">Top Packages</a>
                  </li>
                </ul>
              </div>
              <li>
                <a href="#">CONTACT US</a>
              </li>
              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li onClick={() => setOpenRegister(!openRegister)}>
                <a href="#">REGISTER</a>
              </li>
              <li onClick={() => setOpenLogin(!openLogin)}>
                <a href="#">LOGIN</a>
              </li>
            </ul>
          </div>
        )}
        <Register
          openRegister={openRegister}
          setOpenRegister={() => setOpenRegister(!openRegister)}
          setOpenLogin={() => setOpenLogin(true)}
        />
        <Login
          openLogin={openLogin}
          setOpenLogin={() => setOpenLogin(!openLogin)}
        />
      </Nav>
    </>
  );
};

export default Navbar;

const slideDown = keyframes`
  from {
    top: -100%;
  }
  to {
    top: 0;
  }
`;

const Nav = styled.nav`
  height: 10vh;
  width: 100%;
  background-color: whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .listMenu {
    position: absolute;
    height: max-content;
    width: 25rem;
    background-color: whitesmoke;
    box-shadow: rgba(0, 0, 0, 0.35) 5px 5px 15px;
    top: 10vh;
    right: 0;
    z-index: 999999999;
    ul {
      display: flex;
      height: 100%;
      flex-direction: column;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      gap: 2rem;
      z-index: 999999999;
      padding: 2rem 0;
      .hide {
        display: none;
        z-index: 999999999;
        background-color: white;
        border-radius: 3rem;
        padding: 2rem 0;
      }
      #theme:hover + .hide,
      .hide:hover {
        display: block;
        position: absolute;
        top: 9.1rem;
        right: 25rem;
        box-shadow: rgba(0, 0, 0, 0.35) 5px 5px 15px;
        z-index: 999999999;
        ul {
          display: flex;
          height: 20rem;
          flex-direction: column;
          width: 30rem;
          align-items: center;
          justify-content: flex-start;
          gap: 1rem;
          z-index: 999999999;
          padding: 0 2rem;
          li:hover a {
            color: white;
          }
          li {
            list-style-type: none;
            height: 4.5rem;
            width: 100%;
            display: flex;
            align-items: center;
            z-index: 999999999;
            cursor: pointer;
            justify-content: center;
            &:hover {
              color: white;
              background-color: #393a3b;
            }
            a {
              text-decoration: none;
              z-index: 999999999;
              font-size: 2rem;
              color: #393a3b;
            }
          }
        }
      }
      li {
        list-style-type: none;
        height: 5rem;
        width: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        z-index: 999999999;
        justify-content: center;
        &:hover {
          color: white;
          background-color: #393a3b;
        }
        a {
          text-decoration: none;
          z-index: 999999999;
          font-size: 2rem;
          color: #393a3b;
        }
      }
      li:hover a {
        color: white;
      }
    }
  }
  .left {
    margin-left: 15rem;
    .logo {
      font-size: 4rem;
      font-weight: 600;
      color: #393a3b;
      padding: 1rem 3rem;
      &:hover {
        background-color: #393a3b;
        color: white;
        box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.8);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        border-radius: 2rem;
      }
    }
  }
  .right {
    margin-right: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .links {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        margin-right: 10rem;
        height: 100%;
        .theme_big {
          display: none;
          z-index: 999999999;
          background-color: white;
          border-radius: 3rem;
          padding: 2rem 0;
        }
        #theme:hover + .theme_big,
        .theme_big:hover {
          display: block;
          position: absolute;
          top: 10vh;
          left: 45%;
          box-shadow: rgba(0, 0, 0, 0.35) 5px 5px 15px;
          height: 35vh;
          z-index: 999999999;
          ul {
            display: flex;
            height: max-content;
            flex-direction: column;
            width: 100%;
            align-items: center;
            justify-content: flex-start;
            gap: 1rem;
            z-index: 999999999;
            padding: 0 0;
            li:hover a {
              color: white;
            }
            li {
              list-style-type: none;
              height: 4.5rem;
              width: 100%;
              display: flex;
              align-items: center;
              z-index: 999999999;
              border-radius: 3rem;
              cursor: pointer;
              justify-content: center;
              &:hover {
                color: white;
                background-color: #393a3b;
              }
              a {
                text-decoration: none;
                z-index: 999999999;
                width: 100%;
                font-size: 2rem;
                color: #393a3b;
              }
            }
          }
        }
        li {
          list-style-type: none;
          cursor: pointer;
          padding: 3.1rem 0;
          box-sizing: border-box;
          a {
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            height: 100%;
            padding: 2rem;
            font-size: 2rem;
            color: #393a3b;
            border-radius: 2rem;
            font-weight: 500;
            &:hover {
              background-color: #393a3b;
              color: white;
            }
          }
        }
      }
    }
    .buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5rem;
      button {
        padding: 1rem 3rem;
        font-size: 2rem;
        font-weight: 600;
        color: #393a3b;
        cursor: pointer;
        background-color: white;
        border: 1px solid black;
        &:hover {
          background-color: #393a3b;
          color: white;
          transition: all 0.3s ease-in-out;
        }
      }
    }
    .menu {
      display: none;
      animation: ${slideDown} 0.7s ease-in-out;
      .icon {
        color: #393a3b;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 200px) and (max-width: 875px) {
    width: 100%;
    .left {
      margin-left: 1rem;
      .logo {
        font-size: 3rem;
        font-weight: 600;
        color: #393a3b;
        padding: 1rem 2rem;
        &:hover {
          background-color: #393a3b;
          color: white;
          box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.8);
          transition: all 0.3s ease-in-out;
          cursor: pointer;
          border-radius: 2rem;
        }
      }
    }
    .right {
      display: none;
    }
    .menu {
      display: block;
      display: flex;
      justify-content: center;
      animation: ${slideDown} 0.7s ease-in-out;
      align-items: center;
      .icon {
        font-size: 3.5rem;
        margin-right: 1.5rem;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 875px) and (max-width: 1024px) {
    width: 100%;
    .left {
      margin-left: 5rem;
      .logo {
        font-size: 3.5rem;
      }
    }
    .right {
      margin-right: 5rem;
      .links {
        ul {
          margin-right: 3rem;
          li {
            padding: 0.5rem 1rem;
            a {
              font-size: 1.7rem;
              font-weight: 500;
            }
          }
        }
      }
      .buttons {
        gap: 3rem;
        button {
          padding: 0.7rem 1.5rem;
          font-size: 1.7rem;
        }
      }
    }
    .menu {
      display: none;
    }
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 100%;
    .left {
      margin-left: 5rem;
    }
    .right {
      margin-right: 5rem;
      .links {
        ul {
          margin-right: 3rem;
          li {
            padding: 0.5rem 1rem;
            a {
              font-size: 2rem;
            }
          }
        }
      }
      .buttons {
        gap: 3rem;
        button {
          padding: 0.7rem 1.5rem;
          font-size: 1.5rem;
        }
      }
    }
    .menu {
      display: none;
    }
  }

  @media (min-width: 1200px) {
    .menu {
      display: none;
    }
  }
`;
