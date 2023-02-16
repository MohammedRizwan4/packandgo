import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import styled from "styled-components";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import './PackageDetail.css';
import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { setIsPackagePhoto } from "../../store/reducers/toggleReducer";
import DayPlan from "../../components/users/DayPlan";
import Activity from "../../components/users/Activity";

const PackageDetail = () => {
    const [like, setLike] = useState(false);
    const { isPackagePhoto } = useSelector(state => state.toggleReducer)
    const dispatch = useDispatch();

    const Itinerary = () => {
        return <div className="itinerary">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, doloribus! Enim aspernatur fugit, tempore labore vel adipisci aliquam officia fugiat, error iste quaerat?</p>
        </div>
    }

    const [menu, setMenu] = useState(1);
    return createPortal(
        <Section menu={menu}>
            <div className="mainPackage">
                <div className="header">
                    <div className="left">
                        <div className="package">Package</div>
                        <div className="stars">
                            <StarIcon style={{ fontSize: "2rem", color: "#da6938" }} />
                            <StarIcon style={{ fontSize: "2rem", color: "#da6938" }} />
                            <StarIcon style={{ fontSize: "2rem", color: "#da6938" }} />
                            <StarIcon style={{ fontSize: "2rem", color: "#da6938" }} />
                            <StarIcon style={{ fontSize: "2rem", color: "#da6938" }} />
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
                    <h3>Luxurios Honeymoon in Goa</h3>
                    <p>
                        Vatva Railway Over Bridge Road SANKHESHWAR IND.PARK-2, BLOCK, B, OPP
                        GUJRAT OFFSET, nr. Vatva Railway Over Bridge Road, 382445 Ahmedabad,
                        India
                    </p>
                </div>
                <div className="images" onClick={() => dispatch(setIsPackagePhoto(true))}>
                    <div className="image1"><img src="../../public/assets/topdestination/t4.jpg" alt="" className="image" /></div>
                    <div className="image2"><img src="../../public/assets/topdestination/t4.jpg" alt="" className="image" /></div>
                    <div className="image3"><img src="../../public/assets/topdestination/t4.jpg" alt="" className="image" /></div>
                    <div className="image4"><img src="../../public/assets/topdestination/t4.jpg" alt="" className="image" /></div>
                    <div className="image5"><img src="../../public/assets/topdestination/t4.jpg" alt="" className="image" /></div>
                </div>
                <div className="content">
                    <div className="menu">
                        <button className="btn1" onClick={() => setMenu(1)}>Itinerary</button>
                        <button className="btn2" onClick={() => setMenu(2)}>Activity</button>
                        <button className="btn3" onClick={() => setMenu(3)}>Day Plan</button>
                    </div>
                </div>
                <div className="particularContent">
                    {
                        menu === 1 ? <Itinerary /> : menu === 2 ? <Activity /> : <DayPlan />
                    }
                </div>
            </div>
            { isPackagePhoto && <Opacity onClick={() => dispatch(setIsPackagePhoto(false))} />}
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
  background-color: rgba(0, 0, 0, .8);
`;

const Section = styled.section`
  height: 100vh;
  width: 100%;
  background-color: red;
  max-width: 90%;
  margin: auto;
  .mainPackage {
    height: 100%;
    width: 100%;
    background-color: beige;
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
          font-size: 1.5rem;
          width: max-content;
          padding: 1rem 2rem;
          border-radius: 2rem;
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
          font-size: 3rem;
          color: black;
          opacity: 0.7;
          cursor: pointer;
        }
        .bookingTitle {
          padding: 1rem 2rem;
          cursor: pointer;
          font-size: 2rem;
          outline: none;
          border: none;
          background-color: blue;
          color: white;
          font-weight: 600;
          border-radius: 2rem;
        }
      }
    }
    .packageData {
      padding: 1rem 2rem;
      h3 {
        font-size: 3.5rem;
        color: black;
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
      grid-row-gap:1rem;
      .image1 {
        .image {
            height: 100%;
        width: 100%;
        object-fit: cover;
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
      }
      }
    }
    .content{
        margin-top: 4rem;
        width: 100%;
        max-width: 60%;
        margin: 4rem 10rem;
        .menu{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 3rem;
            button{
                padding: 1rem 3rem;
                font-size: 2rem;
                font-weight: 700;
                border: none;
                background-color: transparent;
                cursor: pointer;
            }
            .btn1{
                border-bottom: ${props => props.menu === 1 ? "5px solid black" : "none"};
            }
            .btn2{
                border-bottom: ${props => props.menu === 2 ? "5px solid black" : "none"};
            }
            .btn3{
                border-bottom: ${props => props.menu === 3 ? "5px solid black" : "none"};
            }
        }
    }
    .particularContent{
        margin-top: 4rem;
        height: 50vh;
        background-color: white;
        width: 100%;
        max-width: 60%;
        margin: 4rem 10rem;
    }
  }
`;
