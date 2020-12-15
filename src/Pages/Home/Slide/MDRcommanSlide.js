import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slide from "react-slick";
import "../config/MDRcommandSlide.scss";
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
        <div className="MDRcommanCard">
          <div className="MDRcommanCardList">
            <Link to="/">
              <img src="./images/디저트.jpg" alt="meat"></img>
            </Link>
            <div className="MDRcommanSlideDesc">
              <Link
                className="MDRcommanSlideLink"
                style={{ textDecoration: "none", color: "#000" }}
                to="/"
              >
                <span>가벼운 한식 도시락 6종</span>{" "}
              </Link>
              <span>3700원</span>
              <span>3300원</span>
            </div>
            <div className="MDRcommanCard">
              <Link to="/">
                <img src="./images/디저트.jpg" alt="meat"></img>
              </Link>
              <div className="MDRcommanSlideDesc">
                <Link
                  className="MDRcommanSlideLink"
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/"
                >
                  <span>가벼운 한식 도시락 6종</span>{" "}
                </Link>
                <span>3700원</span>
                <span>3300원</span>
              </div>
            </div>
            <div className="MDRcommanCard">
              <Link to="/">
                <img src="./images/디저트.jpg" alt="meat"></img>
              </Link>
              <div className="MDRcommanSlideDesc">
                <Link
                  className="MDRcommanSlideLink"
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/"
                >
                  <span>가벼운 한식 도시락 6종</span>{" "}
                </Link>
                <span>3700원</span>
                <span>3300원</span>
              </div>
            </div>
            <div className="MDRcommanCard">
              <Link to="/">
                <img src="./images/디저트.jpg" alt="meat"></img>
              </Link>
              <div className="MDRcommanSlideDesc">
                <Link
                  className="MDRcommanSlideLink"
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/"
                >
                  <span>가벼운 한식 도시락 6종</span>{" "}
                </Link>
                <span>3700원</span>
                <span>3300원</span>
              </div>
            </div>
            <div className="MDRcommanCard">
              <Link to="/">
                <img src="./images/디저트.jpg" alt="meat"></img>
              </Link>
              <div className="MDRcommanSlideDesc">
                <Link
                  className="MDRcommanSlideLink"
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/"
                >
                  <span>가벼운 한식 도시락 6종</span>{" "}
                </Link>
                <span>3700원</span>
                <span>3300원</span>
              </div>
            </div>
            <div className="MDRcommanCard">
              <Link to="/">
                <img src="./images/디저트.jpg" alt="meat"></img>
              </Link>
              <div className="MDRcommanSlideDesc">
                <Link
                  className="MDRcommanSlideLink"
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/"
                >
                  <span>가벼운 한식 도시락 6종</span>{" "}
                </Link>
                <span>3700원</span>
                <span>3300원</span>
              </div>
            </div>
            <div className="MDRcommanCard">
              <Link to="/">
                <img src="./images/디저트.jpg" alt="meat"></img>
              </Link>
              <div className="MDRcommanSlideDesc">
                <Link
                  className="MDRcommanSlideLink"
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/"
                >
                  <span>가벼운 한식 도시락 6종</span>{" "}
                </Link>
                <span>3700원</span>
                <span>3300원</span>
              </div>
            </div>
            <div className="MDRcommanCard">
              <Link to="/">
                <img src="./images/디저트.jpg" alt="meat"></img>
              </Link>
              <div className="MDRcommanSlideDesc">
                <Link
                  className="MDRcommanSlideLink"
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/"
                >
                  <span>가벼운 한식 도시락 6종</span>{" "}
                </Link>
                <span>3700원</span>
                <span>3300원</span>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}
