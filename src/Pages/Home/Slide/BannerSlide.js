import React, { Component } from "react";
import Slide from "react-slick";
import "../config/BannerSlide.scss";
export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 4000,
    };
    return (
      <Slide {...settings}>
        <div className="box">
          <a>
            <img src="./images/감자.png"></img>
          </a>
        </div>
        <div>
          {" "}
          <a>
            <img src="./images/야채.png"></img>
          </a>{" "}
        </div>
        <div>
          <a>
            <img src="./images/포도.png"></img>
          </a>{" "}
        </div>
        <div>
          <a>
            <img src="./images/햄버거.png"></img>
          </a>{" "}
        </div>
        <div>
          {" "}
          <a>
            <img src="./images/하이.png"></img>
          </a>{" "}
        </div>
        <div>
          {" "}
          <a>
            <img src="./images/초록색.png"></img>
          </a>{" "}
        </div>
      </Slide>
    );
  }
}
