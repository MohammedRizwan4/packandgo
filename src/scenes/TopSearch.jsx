import React from "react";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import "./top.css";
// Import Swiper styles
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper";
const TopSearch = () => {
  const sliderSettings = {
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 1,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroupSkip: 2,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroupSkip: 4,
      slidesPerGroup: 4,
      spaceBetween: 10,
    },
  };
  return (
    <Section>
      <h1>Plan your next Trip</h1>
      <Swiper
        slidesPerView={4}
        slideNextClass=".arrow-right"
        slidePrevClass=".arrow-left"
        slidesPerGroup={4}
        slidesPerGroupSkip={4}
        breakpoints={sliderSettings}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="items">
            {/* <div className="like"><AiOutlineHeart /></div> */}
            <div className="imgparent">
              <img src="../../public/assets/topdestination/t4.jpg" alt="" />
            </div>
            <div className="textwrapper">
              <div className="stars">
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
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
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
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
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
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
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
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
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
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
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
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
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
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
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
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
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
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
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
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
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
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
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
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
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
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
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
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
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
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
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
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
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
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
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
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
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
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
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
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
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
                <StarIcon style={{ fontSize: "1.7rem", color: "#da6938" }} />
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

export default TopSearch;

const Section = styled.section`
  padding: 2rem 0rem;
  display: flex;
  height: max-content;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
  h1 {
    font-size: 4rem;
    margin-left: 10rem;
    color: #393a3b;
  }
  .items {
    width: 40rem;
    height: 100%;
    position: relative;
    overflow: hidden;
    box-shadow: rgba(100, 111, 111, 0.35) 5px 5px 5px;
    border-radius: 3rem;
    padding: 0;
    .imgparent {
      overflow: hidden;
      display: block;
      height: 27vh;
      width: 100%;
      border-radius: 0.7rem 0.7rem 0 0;
      img {
        overflow: hidden;
        display: block;
        width: 100%;
        height: 27vh;
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
      padding: 3rem 3.5rem;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      .title {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 7px;
        :hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
      .city {
        font-size: 14px;
        color: #727272;
        margin-bottom: 1rem;
        font-weight: 400;
      }
      hr {
        width: 100%;
        margin: 0;
        margin-bottom: 1rem;
        color: #727272;
      }
      .ratings {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;
        margin-bottom: 1rem;
        .numbers {
          border: 1px solid #3b71fe;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          padding: 0.3rem 1rem;
          color: #3b71fe;
          font-weight: bold;
          border-radius: 7px;
        }
        .type {
          font-size: 14px;
          color: #232323;
          line-height: 26px;
          font-weight: 600;
        }
        .review {
          font-size: 13px;
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
          font-size: 13px;
          font-weight: 400;
        }
        .price {
          font-weight: 600;
          font-size: 16px;
          display: flex;
          align-items: center;
        }
      }
    }
  }
`;
