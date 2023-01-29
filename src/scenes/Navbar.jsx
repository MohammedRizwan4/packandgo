import React from 'react';
import styled from 'styled-components';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Navbar = () => {
    return (
        <>
            <Nav>
                <div className="left">
                    <div className="logo">PACK&GO</div>
                </div>
                <div className="right">
                    <div className="links">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">THEMES</a></li>
                            <li><a href="#">CONTACT US</a></li>
                            <li><a href="#">ABOUT US</a></li>
                        </ul>
                    </div>
                    <div className="buttons">
                        <button>REGISTER</button>
                        <button>LOGIN</button>
                    </div>
                </div>
                <div className="menu">
                    <MenuRoundedIcon className='icon'/>
                </div>
            </Nav>
        </>
    );
}

export default Navbar;

const Nav = styled.nav`
    height: 10vh;
    background-color: whitesmoke;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
        margin-left: 15rem;
        .logo{
            font-size: 4rem;
            font-weight: 600;
            color: #393a3b;
            padding: 1rem 3rem;
            &:hover{
                background-color: #393a3b;
                color: white;
                box-shadow: 4px 4px 30px rgba(0,0,0,0.8);
                transition: all .3s ease-in-out;
                cursor: pointer;
                border-radius: 2rem;
            }
        }
    }
    .right{
        margin-right: 15rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .links{
            ul{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 2rem;
                margin-right: 10rem;
                li{
                    list-style-type: none;
                    padding: 1rem 2rem;
                    a{
                        text-decoration: none;
                        font-size: 2rem;
                        color: #393a3b;
                        font-weight: 500;
                    }
                }
            }
        }
        .buttons{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5rem;
            button{
                padding: 1rem 3rem;
                font-size: 2rem;
                font-weight: 600;
                color: #393a3b;
                cursor: pointer;
                background-color: white;
                border: 1px solid black;
                &:hover{
                    background-color: #393a3b;
                    color: white;
                    transition: all .3s ease-in-out;
                }
            }
        }
        .menu{
            display: none;
        }
    }

    @media (min-width:200px) and (max-width:875px) {
        width: 100%;
        .left{
        margin-left: 1rem;
        .logo{
            font-size: 3rem;
            font-weight: 600;
            color: #393a3b;
            padding: 1rem 2rem;
            &:hover{
                background-color: #393a3b;
                color: white;
                box-shadow: 4px 4px 30px rgba(0,0,0,0.8);
                transition: all .3s ease-in-out;
                cursor: pointer;
                border-radius: 2rem;
            }
        }
    }
        .right{
            display: none;
        }
        .menu{
            display: block;
            display: flex;
            justify-content: center;
            align-items: center;
            .icon{
                font-size: 3.5rem;
                margin-right: 1.5rem;
            }
        }
    }

    @media (min-width:875px) and (max-width:1024px) {
        .left{
            margin-left: 5rem;
            .logo{
                font-size: 3.5rem;
            }
        }
        .right{
            margin-right: 5rem;
            .links{
                ul{
                    margin-right: 3rem;
                    li{
                        padding: .5rem 1rem;
                        a{
                            font-size: 1.7rem;
                            font-weight: 500;
                        }
                    }
                }
            }
            .buttons{
                gap: 3rem;
                button{
                    padding: 0.7rem 1.5rem;
                    font-size: 1.7rem;
                }
            }
        }
        .menu{
            display: none;
        }
    }

    @media (min-width:1024px) and (max-width:1200px) {
        .left{
            margin-left: 5rem;
        }
        .right{
            margin-right: 5rem;
            .links{
                ul{
                    margin-right: 3rem;
                    li{
                        padding: .5rem 1rem;
                        a{
                            font-size: 2rem;
                        }
                    }
                }
            }
            .buttons{
                gap: 3rem;
                button{
                    padding: 0.7rem 1.5rem;
                    font-size: 1.5rem;
                }
            }
        }
        .menu{
            display: none;
        }
    }

    @media (min-width:1200px) {
        .menu{
            display: none;
        }
    }
`


