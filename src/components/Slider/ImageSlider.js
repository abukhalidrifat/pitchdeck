import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FcPrevious, FcNext } from "react-icons/fc";
import { slides } from "./SliderData";

const prevBtn = {
  position: "absolute",
  left: "15px",
  top: "50%",
  zIndex: "3",
  fontSize: "30px",
  cursor: "pointer",
};
const nxtBtn = {
  position: "absolute",
  right: "15px",
  top: "50%",
  zIndex: "3",
  fontSize: "30px",
  cursor: "pointer",
};
const sliderText = {
  color: "black",
  background: "white",
  width: "35%",
  height: "400px",
  padding: "10px",
};
const sliderPara = {
  position: "absolute",
  bottom: "30px",
  fontSize: "38px",
  fontWeight: "400",
  wordSpacing: "99999px",
  marginLeft: "34px",
};

export default function ImageSlider() {
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
      <FcPrevious style={prevBtn} onClick={() => gotoPrev()} />
      <FcNext style={nxtBtn} onClick={() => gotoNext()} />
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide) => (
          <div>
            <div style={{ display: "flex" }}>
              <div style={sliderText} className="imgSliderText">
                <p style={sliderPara}>
                  {slide.text}
                  <br />
                  <button
                    style={{
                      background: "white",
                      width: "240px",
                      padding: "10px",
                    }}
                  >
                    Book Now
                  </button>
                </p>
              </div>
              <img
                src={slide.image}
                style={{ width: "65%", height: "400px", objectFit: "cover" }}
                className="imgSliderImg"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
