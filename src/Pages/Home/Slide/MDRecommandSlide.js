import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
export default class MDRcommandSlide extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
    };

    const { filtering } = this.props;
    return (
      <div>
        <Slider {...settings}>
          {filtering?.map(e => {
            return (
              e.subcategory_name === "돼지고기" && (
                <div className="MDRcommanCard">
                  <Link className="MDLink" to="/">
                    <img src={e.image_url} alt="meat" />
                    <div className="MDRcommanSlideDesc">
                      <span>{e.name}</span>
                      <span>{e.subtitle}</span>
                      <span>{e.price}</span>
                      <span>{e.discount_percentage}</span>
                    </div>
                  </Link>
                </div>
              )
            );
          })}
        </Slider>
        <Slider {...settings}>
          {filtering?.map(e => {
            return (
              e.subcategory_name === "소고기" && (
                <div className="MDRcommanCard">
                  <Link className="MDLink" to="/">
                    <img src={e.image_url} alt="meat" />
                    <div className="MDRcommanSlideDesc">
                      <span>{e.name}</span>
                      <span>{e.subtitle}</span>
                      <span>{e.price}</span>
                      <span>{e.discount_percentage}</span>
                    </div>
                  </Link>
                </div>
              )
            );
          })}
        </Slider>
      </div>
    );
  }
}
