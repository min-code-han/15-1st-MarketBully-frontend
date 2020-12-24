import React from "react";
import { Link } from "react-router-dom";
import Slide from "react-slick";
import "../config/BannerSlide.scss";
export default class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerImag: [
        { id: 1, src: "images/스윗파이.png" },
        { id: 2, src: "images/포도.png" },
        { id: 3, src: "images/디저트1.jpg" },
        { id: 4, src: "images/크리스마스.png" },
        { id: 5, src: "images/시카고햄버거.png" },
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
