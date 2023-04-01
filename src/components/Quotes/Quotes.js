import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FcPrevious, FcNext } from "react-icons/fc";
import quoteImg from "../../icons/quote.png";
import {quotesData} from './QuotesData'

const prevBtn = {
  position: "absolute",
  left: "150px",
  top: "50%",
  zIndex: "3",
  fontSize: "35px",
  cursor: "pointer",
  transform:'translate(0,-50%)',
};
const nxtBtn = {
  position: "absolute",
  right: "150px",
  top: "50%",
  zIndex: "3",
  fontSize: "35px",
  cursor: "pointer",
  transform:'translate(0,-50%)',
};
const sliderText = {
  color: "black",
  background: "white",
  height: "auto",
  padding: "10px",
};
const sliderPara = {
  fontSize: "31px",
  fontWeight: "500",
  textAlign: "center",
  marginTop: "35px",
  marginBottom:'18px'
};
const quoteText = {
  width: "60%",
  textAlign: "center",
  display: "block",
  margin: "auto",
  fontSize: "20px",
  fontWeight: "400",
  marginTop: "15px",
};
const quoteAuthor = {
  fontSize: "21px",
  textAlign: "center",
  marginTop: "15px",
  marginBottom:'40px'
};

export default function Quotes() {
  const sliderRef = useRef();
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: false,
  };
  const gotoNext = () => {
    sliderRef.current.slickNext();
  };
  const gotoPrev = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div style={{ position: "relative" }}>
      <FcPrevious className="quotePrevBtn" style={prevBtn} onClick={() => gotoPrev()} />
      <FcNext className="quoteNextBtn" style={nxtBtn} onClick={() => gotoNext()} />
      <Slider {...settings} ref={sliderRef}>
        {quotesData.map((data) => (
          <div>
            <div>
              <div style={sliderText}>
                <p style={sliderPara}>What People Are Saying</p>
                <img src={quoteImg} alt="quote" style={{ margin: "auto" }} />
                <p style={quoteText}>{data.quoted}</p>
                <p style={quoteAuthor}>- {data.author}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
