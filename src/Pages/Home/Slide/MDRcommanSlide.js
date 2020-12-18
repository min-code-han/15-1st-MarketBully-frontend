import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slide from "react-slick";
import "../config/MDRcommandSlide.scss";
export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
    };

    const { mode, data } = this.props;
    return (
      <Slide {...settings}>
        {data.map(data => {
          return (
            <div className="MDRcommanCard">
              <Link
                className="MDLink"
                to="/"
                data-type={data.filterName}
                className={mode ? "MDLink invisible" : "MDLink"}
              >
                <img src={data.img} alt="meat"></img>
                <div className="MDRcommanSlideDesc">
                  <span>가벼운 한식 도시락 6종</span>
                  <span>3300원</span>
                </div>
              </Link>
            </div>
          );
        })}
      </Slide>
    );
  }
}
