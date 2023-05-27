import React, { Component } from "react";
import Slider from "react-slick";
import styles from "../pages/homePage/homePage.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avtonline1 from "../images/Frame 20.png";
import avtonline2 from "../images/Frame 15.png";
import avtonline3 from "../images/Frame 17.png";
import avtonline4 from "../images/Frame 18.png";
import avtonline5 from "../images/Frame 19.png";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <Arrow />,
    // prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //   }
      // },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div className={styles.avtonline1}>
          <img src={avtonline1} alt="images" />
        </div>
        <div className={styles.avtonline2}>
          <img src={avtonline2} alt="images" />
        </div>
        <div className={styles.avtonline3}>
          <img src={avtonline3} alt="images" />
        </div>
        <div className={styles.avtonline4}>
          <img src={avtonline4} alt="images" />
        </div>
        <div className={styles.avtonline5}>
          <img src={avtonline5} alt="images" />
        </div>
        <div className={styles.avtonline5}>
          <img src={avtonline5} alt="images" />
        </div>
        <div className={styles.avtonline5}>
          <img src={avtonline5} alt="images" />
        </div>
        <div className={styles.avtonline5}>
          <img src={avtonline5} alt="images" />
        </div>
      </Slider>
    </div>
  );
}
export default SimpleSlider;
