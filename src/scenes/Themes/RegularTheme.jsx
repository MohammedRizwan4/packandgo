import React, { useEffect } from "react";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import '../home/top.css'
import { Link } from "react-router-dom";
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/virtual';

const RegularTheme = ({ data }) => {

    return (
        <Section>
            <div className="proImage">
                <img src={`http://localhost:7800/${data?.theme?.image}`} alt="" />
                <h1>{data?.theme?.name}</h1>
                <p>{data?.theme?.description}</p>
            </div>
            <Swiper modules={[Virtual]} slidesPerView={4} virtual>
                <SwiperSlide>
                    <div className="items">
                        {/* <div className="like"><AiOutlineHeart /></div> */}
                        <div className="imgparent">
                            <img src="../../public/assets/topdestination/t4.jpg" alt="" />
                        </div>
                        <div className="textwrapper">
                            <div className="stars">
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                            </div>
                            <Link to="/id">
                                <div className="title">Luxurios Honeymoon in Goa</div>
                            </Link>
                            <div className="city">Goa</div>
                            <hr />
                            <div className="ratings">
                                <div className="numbers"> 5/5</div>
                                <div className="type">Excellent</div>
                                <div className="review">(3 Reviews)</div>
                            </div>
                            <div className="priceDetails">
                                <div className="from">From : </div>
                                <div className="price">
                                    €180,00 <span className="from">&nbsp;/ nights</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="items">
                        {/* <div className="like"><AiOutlineHeart /></div> */}
                        <div className="imgparent">
                            <img src="../../public/assets/topdestination/t4.jpg" alt="" />
                        </div>
                        <div className="textwrapper">
                            <div className="stars">
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                            </div>
                            <Link to="/id">
                                <div className="title">Luxurios Honeymoon in Goa</div>
                            </Link>
                            <div className="city">Goa</div>
                            <hr />
                            <div className="ratings">
                                <div className="numbers"> 5/5</div>
                                <div className="type">Excellent</div>
                                <div className="review">(3 Reviews)</div>
                            </div>
                            <div className="priceDetails">
                                <div className="from">From : </div>
                                <div className="price">
                                    €180,00 <span className="from">&nbsp;/ nights</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="items">
                        {/* <div className="like"><AiOutlineHeart /></div> */}
                        <div className="imgparent">
                            <img src="../../public/assets/topdestination/t4.jpg" alt="" />
                        </div>
                        <div className="textwrapper">
                            <div className="stars">
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                            </div>
                            <Link to="/id">
                                <div className="title">Luxurios Honeymoon in Goa</div>
                            </Link>
                            <div className="city">Goa</div>
                            <hr />
                            <div className="ratings">
                                <div className="numbers"> 5/5</div>
                                <div className="type">Excellent</div>
                                <div className="review">(3 Reviews)</div>
                            </div>
                            <div className="priceDetails">
                                <div className="from">From : </div>
                                <div className="price">
                                    €180,00 <span className="from">&nbsp;/ nights</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="items">
                        {/* <div className="like"><AiOutlineHeart /></div> */}
                        <div className="imgparent">
                            <img src="../../public/assets/topdestination/t4.jpg" alt="" />
                        </div>
                        <div className="textwrapper">
                            <div className="stars">
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                            </div>
                            <Link to="/id">
                                <div className="title">Luxurios Honeymoon in Goa</div>
                            </Link>
                            <div className="city">Goa</div>
                            <hr />
                            <div className="ratings">
                                <div className="numbers"> 5/5</div>
                                <div className="type">Excellent</div>
                                <div className="review">(3 Reviews)</div>
                            </div>
                            <div className="priceDetails">
                                <div className="from">From : </div>
                                <div className="price">
                                    €180,00 <span className="from">&nbsp;/ nights</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="items">
                        {/* <div className="like"><AiOutlineHeart /></div> */}
                        <div className="imgparent">
                            <img src="../../public/assets/topdestination/t4.jpg" alt="" />
                        </div>
                        <div className="textwrapper">
                            <div className="stars">
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                            </div>
                            <Link to="/id">
                                <div className="title">Luxurios Honeymoon in Goa</div>
                            </Link>
                            <div className="city">Goa</div>
                            <hr />
                            <div className="ratings">
                                <div className="numbers"> 5/5</div>
                                <div className="type">Excellent</div>
                                <div className="review">(3 Reviews)</div>
                            </div>
                            <div className="priceDetails">
                                <div className="from">From : </div>
                                <div className="price">
                                    €180,00 <span className="from">&nbsp;/ nights</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="items">
                        {/* <div className="like"><AiOutlineHeart /></div> */}
                        <div className="imgparent">
                            <img src="../../public/assets/topdestination/t4.jpg" alt="" />
                        </div>
                        <div className="textwrapper">
                            <div className="stars">
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                            </div>
                            <Link to="/id">
                                <div className="title">Luxurios Honeymoon in Goa</div>
                            </Link>
                            <div className="city">Goa</div>
                            <hr />
                            <div className="ratings">
                                <div className="numbers"> 5/5</div>
                                <div className="type">Excellent</div>
                                <div className="review">(3 Reviews)</div>
                            </div>
                            <div className="priceDetails">
                                <div className="from">From : </div>
                                <div className="price">
                                    €180,00 <span className="from">&nbsp;/ nights</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="items">
                        {/* <div className="like"><AiOutlineHeart /></div> */}
                        <div className="imgparent">
                            <img src="../../public/assets/topdestination/t4.jpg" alt="" />
                        </div>
                        <div className="textwrapper">
                            <div className="stars">
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                            </div>
                            <Link to="/id">
                                <div className="title">Luxurios Honeymoon in Goa</div>
                            </Link>
                            <div className="city">Goa</div>
                            <hr />
                            <div className="ratings">
                                <div className="numbers"> 5/5</div>
                                <div className="type">Excellent</div>
                                <div className="review">(3 Reviews)</div>
                            </div>
                            <div className="priceDetails">
                                <div className="from">From : </div>
                                <div className="price">
                                    €180,00 <span className="from">&nbsp;/ nights</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="items">
                        {/* <div className="like"><AiOutlineHeart /></div> */}
                        <div className="imgparent">
                            <img src="../../public/assets/topdestination/t4.jpg" alt="" />
                        </div>
                        <div className="textwrapper">
                            <div className="stars">
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                            </div>
                            <Link to="/id">
                                <div className="title">Luxurios Honeymoon in Goa</div>
                            </Link>
                            <div className="city">Goa</div>
                            <hr />
                            <div className="ratings">
                                <div className="numbers"> 5/5</div>
                                <div className="type">Excellent</div>
                                <div className="review">(3 Reviews)</div>
                            </div>
                            <div className="priceDetails">
                                <div className="from">From : </div>
                                <div className="price">
                                    €180,00 <span className="from">&nbsp;/ nights</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="items">
                        {/* <div className="like"><AiOutlineHeart /></div> */}
                        <div className="imgparent">
                            <img src="../../public/assets/topdestination/t4.jpg" alt="" />
                        </div>
                        <div className="textwrapper">
                            <div className="stars">
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                            </div>
                            <Link to="/id">
                                <div className="title">Luxurios Honeymoon in Goa</div>
                            </Link>
                            <div className="city">Goa</div>
                            <hr />
                            <div className="ratings">
                                <div className="numbers"> 5/5</div>
                                <div className="type">Excellent</div>
                                <div className="review">(3 Reviews)</div>
                            </div>
                            <div className="priceDetails">
                                <div className="from">From : </div>
                                <div className="price">
                                    €180,00 <span className="from">&nbsp;/ nights</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Section>
    );
};

export default RegularTheme;

const Section = styled.section`
  display: flex;
  height: 150vh;
  background-color: var(--bgLightSkin);
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  gap: var(--r2);
  width: 100%;
  .proImage{
    width: 100%;
    height: 70vh;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(40%);
    }
    h1 {
        margin: 0;
        padding: 0;
        position: absolute;
        top: 5rem;
        left: 0;
        font-size: var(--r4);
        margin-left: var(--r10);
        color: var(--bgWhite);
    }
    p{
        margin: 0;
        padding: 0;
        position: absolute;
        top: 12rem;
        left: 0;
        font-size: var(--r1-75);
        font-weight: 700;
        margin-left: var(--r10);
        margin-right: var(--r10);
        color: var(--bgWhite);
    }
  }
  .items {
    width: var(--r34);
    height: 90%;
    position: relative;
    overflow: hidden;
    box-shadow:  3px 3px 3px 3px rgba(100, 111, 111, 0.35);
    border-radius: var(--r2);
    margin-left: var(--r2);
    .imgparent {
      overflow: hidden;
      display: block;
      height: 50%;
      width: 100%;
      border-radius: 0.7rem 0.7rem 0 0;
      img {
        overflow: hidden;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s;
        :hover {
          transform: scale(1.1);
          transform-origin: 50% 50%;
          cursor: pointer;
        }
      }
    }
    .textwrapper {
      padding: var(--r1-5) var(--r2);
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      .title {
        font-size: var(--r1-75);
        font-weight: bold;
        margin-bottom: 7px;
        :hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
      .city {
        font-size: var(--r1-25);
        color: var(--bgBlack);
        margin-bottom: var(--r1);
        font-weight: 400;
      }
      hr {
        width: 100%;
        margin: 0;
        margin-bottom: var(--r1);
        color: var(--bgBorder);
      }
      .ratings {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--r1);
        margin-bottom: var(--r1);
        .numbers {
          border: 1px solid #3b71fe;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          padding: var(--r-25) var(--r1);
          color: #3b71fe;
          font-weight: bold;
          border-radius: 7px;
        }
        .type {
          font-size: var(--r1-25);
          color: #232323;
          line-height: 26px;
          font-weight: 600;
        }
        .review {
          font-size: var(--r1-25);
          font-weight: 400;
          color: #212529;
        }
      }
      .priceDetails {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        .from {
          color: #212529;
          font-size: var(--r1-25);
          font-weight: 700;
        }
        .price {
          font-weight: 700;
          font-size: var(--r1-5);
          display: flex;
          align-items: center;
        }
      }
    }
  }
`;
