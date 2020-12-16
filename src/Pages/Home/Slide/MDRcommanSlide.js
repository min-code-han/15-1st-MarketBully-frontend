import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slide from "react-slick";
import "../config/MDRcommandSlide.scss";
export default class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "정육", filterName: "yearevent", img: "./images/디저트.jpg" },
        { name: "소고기", filterName: "vegetable", img: "./images/스테이크.jpg" },
        { name: "돼지고기", filterName: "meat", img: "./images/밥상.jpg" },
        { name: "계란류", filterName: "bakery", img: "./images/스테이크.jpg" },
        { name: "닭", filterName: "bakery", img: "./images/스테이크.jpg" },
        { name: "계란류", filterName: "bakery", img: "./images/스테이크.jpg" },
        { name: "양고기", filterName: "bakery", img: "./images/스테이크.jpg" },
      ],
    };
  }

  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
    };
    const { mode, filterTarget } = this.props;

    return (
      <Slide {...settings}>
        {this.state.data.map(data => {
          return (
            <div className="MDRcommanCard">
              <Link
                className={mode ? "MDLink invisible" : "MDLink"}
                data-filter={data.filterName}
                to="/"
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
