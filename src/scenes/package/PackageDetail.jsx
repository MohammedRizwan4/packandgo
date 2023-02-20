import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import styled from "styled-components";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./PackageDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { setIsPackagePhoto } from "../../store/reducers/toggleReducer";
import Activity from "./Activity/Activity";
import DayPlan from "./DayPlan/DayPlan";
import location from './location.jpg';
import CheckIcon from '@mui/icons-material/Check';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const PackageDetail = ({ data }) => {

    const [like, setLike] = useState(false);
    const { isPackagePhoto } = useSelector((state) => state.toggleReducer);
    const dispatch = useDispatch();

    const Itinerary = () => {
        return (
            <div className="itinerary">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
                    doloribus! Enim aspernatur fugit, tempore labore vel adipisci aliquam
                    officia fugiat, error iste quaerat?
                </p>
            </div>
        );
    };

    const [arrow, setArrow] = useState(0);
    const [menu, setMenu] = useState(1);

    const [scrollDisabled, setScrollDisabled] = useState(false);

    useEffect(() => {
        isPackagePhoto ? setScrollDisabled(true) : setScrollDisabled(false);;
    }, [isPackagePhoto]);

    useEffect(() => {
        if (scrollDisabled) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = 'auto';
        }
    }, [scrollDisabled]);

    return createPortal(
        <Section menu={menu}>
            <div className="mainPackage">
                <div className="header">
                    <div className="left">
                        <div className="package">Package</div>
                        <div className="stars">
                            {
                                Array.from({ length: data?.stars }, (_, i) => (
                                    <StarIcon style={{ fontSize: "var(--r1-5)", color: "var(--starColor)" }} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="right">
                        {like ? (
                            <FavoriteIcon onClick={() => setLike(!like)} className="icon" />
                        ) : (
                            <FavoriteBorderIcon
                                className="icon"
                                onClick={() => setLike(!like)}
                            />
                        )}
                        <ShareIcon className="icon" />
                        <button className="bookingTitle">Book Now</button>
                    </div>
                </div>
                <div className="packageData">
                    <h3>{data.name}</h3>
                    {/* <p>
                        Vatva Railway Over Bridge Road SANKHESHWAR IND.PARK-2, BLOCK, B, OPP
                        GUJRAT OFFSET, nr. Vatva Railway Over Bridge Road, 382445 Ahmedabad,
                        India
                    </p> */}
                </div>
                <div
                    className="images"
                    onClick={() => dispatch(setIsPackagePhoto(true))}
                >
                    {Array.from({ length: 5 }, (_, index) => (
                        <div key={index} className={`image${index + 1}`}>
                            <img
                                src={`http://localhost:7800/${data?.images[index]}`}
                                alt="image1"
                                className="image"
                            />
                        </div>
                    ))}
                </div>
                <div className="whole-main1 tripDescription">
                    <div>
                        <h1>Scintillating Maldives Canareef Package</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Trip Location:</td>
                                    <td>{data.location.city}</td>
                                </tr>
                                <tr>
                                    <td>Destinations Covered:</td>
                                    <td>
                                        {
                                            data?.destinations_covered.map((d) => {
                                                return (
                                                    <p>{d} - </p>
                                                )
                                            })
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Starting Point: </td>
                                    <td>{data?.starting_point}</td>
                                </tr>
                                <tr>
                                    <td>End Point: </td>
                                    <td>{data?.ending_point}</td>
                                </tr>
                                <tr>
                                    <td>Accommodation:</td>
                                    <td>
                                        {
                                            data?.accommodations.map((d) => {
                                                return (
                                                    <p>{d} - </p>
                                                )
                                            })
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <img src={location} alt="" />
                    </div>
                </div>
                <div className="whole-main">
                    <div className="content">
                        <div className="menu">
                            <button className="btn1" onClick={() => setMenu(1)}>
                                Itinerary
                            </button>
                            <button className="btn3" onClick={() => setMenu(3)}>
                                Day Plan
                            </button>
                            <button className="btn2" onClick={() => setMenu(2)}>
                                Activity
                            </button>
                        </div>
                    </div>
                    <div className="particularContent">
                        {menu === 1 ? (
                            <Itinerary />
                        ) : menu === 2 ? (
                            <Activity />
                        ) : (
                            <><DayPlan /><DayPlan/></>
                        )}
                    </div>
                </div>
                <div className="whole-main2">
                    <div className="content">
                        <h1>Highlights</h1>
                        <div className="two-boxes">
                            <div className="container">
                                <CheckIcon className="icon" />
                                <p>Travel Period: Not applicable for festive season</p>
                            </div>
                            <div className="container">
                                <CheckIcon className="icon" />
                                <p>Flight tickets are included from New Delhi, Bangalore, Mumbai, Chennai</p>
                            </div>
                        </div>
                        <div className="two-boxes">
                            <div className="container">
                                <CheckIcon className="icon" />
                                <p>Relaxing leisure days on the beaches</p>
                            </div>
                            <div className="container">
                                <CheckIcon className="icon" />
                                <p>Meet the people here and gain an understanding of their culture</p>
                            </div>
                        </div>
                        <div className="two-boxes">
                            <div className="container">
                                <CheckIcon className="icon" />
                                <p>Dive into the surrounding water for a wonderful experience</p>
                            </div>
                            <div className="container">
                                <CheckIcon className="icon" />
                                <p>Travel Period: Not applicable for festive season</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isPackagePhoto && (
                <>
                    <Opacity onClick={() => dispatch(setIsPackagePhoto(false))} />
                    <div className="slider">
                        <div className="left"><ArrowLeftIcon onClick={() => setArrow(arrow => arrow === 0 ? 4 : arrow - 1)} style={{ fontSize: "2.5rem", color: "white" }} /></div>
                        <div className="middle">
                            <img
                                src={`http://localhost:7800/${data?.images[arrow]}`}
                                alt="image1"
                                className="image"
                            />
                        </div>
                        <div className="right"><ArrowRightIcon onClick={() => setArrow(arrow => arrow === 4 ? 0 : arrow + 1)} style={{ fontSize: "2.5rem", color: "white" }} /></div>
                    </div>
                </>
            )}
        </Section>,
        document.getElementById("images")
    );
};

export default PackageDetail;

const Opacity = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1999;
  background-color: rgba(0, 0, 0, 0.8);
  `;

const Section = styled.section`
  height: max-content;
  width: 100%;
  max-width: 90%;
  margin: auto;
  position: relative;
  .slider{
    position: absolute;
    width: 100%;
    height: 90vh;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    .left{
        width: 5rem;
        height: 5rem;
        background-color: gray;
        opacity: .6;
        cursor: pointer;
        z-index: 2999;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .middle{
        z-index: 2999;
        img{
            width: 100rem;
            height: 50rem;
            object-fit: cover;
            border-radius: 2rem;
        }
    }
    .right{
        width: 5rem;
        height: 5rem;
        background-color: gray;
        cursor: pointer;
        opacity: .6;
        z-index: 2999;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
  }
  .mainPackage {
    height: max-content;
    width: 100%;
    /* background-color: beige; */
    .tripDescription {
      height: 20vh;
      width: 100%;
      padding: 2rem 2rem;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img{
        width: 20rem;
        height: 20rem;
        object-fit: cover;
      }
      table {
        tbody {
          tr {
            td {
              :first-child {
                font-weight: 500;
                font-size: 1.8rem;
              }
              margin-bottom: var(--r1-25);
              font-size: 1.5rem;
              font-weight: 500;
              padding-right: var(--r2);
              p{
                padding: 0;
                color: black;
              }
            }
          }
        }
      }
    }
    .header {
      width: 100%;
      padding: 2rem 2rem;
      height: 7rem;
      align-items: center;
      justify-content: space-between;
      display: flex;
      background-color: white;
      .left {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        .stars {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .package {
          font-size: 1.2rem;
          width: max-content;
          padding: 0.5rem 1.7rem;
          border-radius: 1rem;
          background-color: blue;
          color: white;
          opacity: 0.6;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .right {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        .icon {
          font-size: 2.3rem;
          color: black;
          opacity: 0.7;
          cursor: pointer;
        }
        .bookingTitle {
          padding: 1rem 2rem;
          cursor: pointer;
          font-size: 1.3rem;
          outline: none;
          border: none;
          background-color: blue;
          color: white;
          font-weight: 600;
          border-radius: 1.3rem;
        }
      }
    }
    .packageData {
      padding: 1rem 2rem;
      h3 {
        font-size: 3rem;
        color: var(--bgDarkAdmin);
        font-weight: 700;
        margin-bottom: 0.6rem;
      }
      p {
        padding: 0;
        font-size: 1.5rem;
        color: black;
      }
    }
    .images {
      width: 100%;
      cursor: pointer;
      display: grid;
      height: max-content;
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-rows: 50% 50%;
      grid-template-areas:
        "image1 image2 image3"
        "image1 image4 image5";
      grid-column-gap: 1rem;
      grid-row-gap: 1rem;
      .image1 {
        .image {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-top-left-radius: 2rem;
          border-bottom-left-radius: 2rem;
        }
        grid-area: image1;
        height: 100%;
        width: 100%;
      }
      .image2 {
        grid-area: image2;

        .image {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
      .image3 {
        grid-area: image3;

        .image {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-top-right-radius: 2rem;
        }
      }
      .image4 {
        grid-area: image4;

        .image {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
      .image5 {
        grid-area: image5;

        .image {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-bottom-right-radius: 2rem;
        }
      }
    }
    .whole-main {
      margin: 4rem 7rem;
      border-radius: 1rem;
      width: 60%;
      height: max-content;
      border: 2px solid var(--bgBorder);
      .content {
        width: 100%;
        max-width: 60%;
        margin: 2rem 2rem;
        .menu {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 3rem;
          button {
            padding: 1rem 3rem;
            font-size: var(--r1-75);
            font-weight: 700;
            border: none;
            background-color: transparent;
            cursor: pointer;
          }
          .btn1 {
            border-bottom: ${(props) =>
        props.menu === 1 ? "3px solid black" : "none"};
          }
          .btn2 {
            border-bottom: ${(props) =>
        props.menu === 2 ? "3px solid black" : "none"};
          }
          .btn3 {
            border-bottom: ${(props) =>
        props.menu === 3 ? "3px solid black" : "none"};
          }
        }
      }
      .particularContent {
        width: 95%;
        margin-top: 4rem;
        height: max-content;
        background-color: white;
        margin: 1rem 2rem;
      }
    }
    .whole-main2 {
      margin: 4rem 7rem;
      border-radius: 1rem;
      width: 60%;
      border: 2px solid var(--bgBorder);
      .content {
        width: 95%;
        margin: 3rem 3rem;
            h1{
                width: 100%;
                font-size: 2rem;
            }
            .two-boxes{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                padding: 0 2rem;
                gap: 4rem;
                margin-top: 2rem;
                .container{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 1rem;
                    width: 45%;
                    .icon{
                        font-size: 1.6rem;
                        color: green;
                        stroke: green;
                        stroke-width: 2;
                    }
                    p{
                        padding: 0;
                        font-size: 1.6rem;
                    }
                }
            }
        }
    }
    .whole-main1 {
        h1{
            font-size: 2rem;
            color: gray;
            margin-bottom: 2rem;
        }
        margin: 4rem 7rem;
        border-radius: 1rem;
        width: 60%;
        height: max-content;
        border: 2px solid var(--bgBorder);
        .particularContent {
            width: 95%;
            margin-top: 4rem;
            height: 40vh;
            background-color: white;
            margin: 1rem 2rem;
        }
        }
    }
`;
