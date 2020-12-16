import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slide from "react-slick";
import "../config/BannerSlide.scss";
export default class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerImag: [
        {
          src: "./images/크리스마스.png",
        },
        {
          src: "./images/시카고햄버거.png",
        },
        {
          src: "./images/크리스마스.png",
        },
        {
          src: "./images/크리스마스.png",
        },
        {
          src: "./images/디저트1.jpg",
        },
      ],
    };
  }
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
    };
    return (
      <Slide {...settings}>
        {this.state.bannerImag.map(data => {
          return (
            <div>
              <Link to="/">
                <img src={data.src}></img>
              </Link>
            </div>
          );
        })}
      </Slide>
    );
  }
}
