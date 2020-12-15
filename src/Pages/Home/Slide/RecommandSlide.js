import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slide from "react-slick";
import "../config/RecommandSlide.scss";
export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
    };

    return (
      <Slide {...settings}>
        <div className="recommand__container">
          <Link to="/">
            <img src="./images/디저트.jpg" alt="meat"></img>
          </Link>
          <div className="recommand__desc">
            <Link
              className="recommand__link"
              style={{ textDecoration: "none", color: "#000" }}
              to="/"
            >
              <span>[탄단지]</span>
              <span>가벼운 한식 도시락 6종</span>{" "}
            </Link>
            <span>3700원</span>
            <span>3300원</span>
          </div>
        </div>
        <div className="recommand__container">
          <Link className="recommand__image" to="/">
            {" "}
            <img src="./images/디저트1.jpg" alt="meat"></img>
          </Link>
        </div>
        <div>
          <Link className="recommand__image" to="/">
            {" "}
            <img src="./images/스테이크.jpg" alt="meat"></img>
          </Link>
        </div>
        <div className="recommand__container">
          <Link className="recommand__image" to="/">
            {" "}
            <img src="./images/밥상.jpg" alt="meat"></img>
          </Link>{" "}
        </div>
        <div className="recommand__container">
          {" "}
          <Link className="recommand__image" to="/">
            {" "}
            <img src="./images/스파케티.jpg" alt="meat"></img>
          </Link>{" "}
        </div>
        <div className="recommand__container">
          {" "}
          <Link className="recommand__image" to="/">
            {" "}
            <img src="./images/스테이크.jpg" alt="meat"></img>
          </Link>{" "}
        </div>
        <div className="recommand__container">
          {" "}
          <Link className="recommand__image" to="/">
            {" "}
            <img src="./images/스테이크.jpg" alt="meat"></img>
          </Link>
        </div>
        <div className="recommand__container">
          {" "}
          <Link to="/">
            {" "}
            <img src="./images/밥상.jpg" alt="meat"></img>
          </Link>{" "}
        </div>
      </Slide>
    );
  }
}
