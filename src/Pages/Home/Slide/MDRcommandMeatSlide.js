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
    const { data } = this.props;

    return (
      <Slide {...settings}>
        {data?.map(data => {
          return (
            data.filterName === "meat" && (
              <div className="MDRcommanCard">
                <Link className="MDLink" to="/">
                  <img src={data.imgUrl} alt="meat" />
                  <div className="MDRcommanSlideDesc">
                    <span>{data.companyName}</span>
                    <span>{data.productName}</span>
                    <span>{data.price}</span>
                    <span>{data.savePrice}</span>
                  </div>
                </Link>
              </div>
            )
          );
        })}
      </Slide>
    );
  }
}
