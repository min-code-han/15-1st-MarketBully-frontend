import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slide from "react-slick";
import "../config/RecommandSlide.scss";
export default class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/data.json")
      .then(res => res.json())
      .then(res => this.setState({ data: res.data }));
  };

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
        {this.state.data?.map(data => {
          return (
            <div className="recommand__container">
              <Link to="/">
                <img src={data.imgUrl} alt={data.alt}></img>
              </Link>
              <div className="recommand__desc">
                <Link className="recommand__link" to="/">
                  <span>{data.companyName}</span>
                  <span>{data.productName}</span>{" "}
                </Link>
                <span>{data.price}</span>
                <span className="savePrice">{data.savePrice}</span>
              </div>
            </div>
          );
        })}
      </Slide>
    );
  }
}
