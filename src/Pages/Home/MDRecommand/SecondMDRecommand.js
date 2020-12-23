import React, { Component } from "react";
import Slider from "react-slick";
import "../config/MDRcommandSlide.scss";
import { Link } from "react-router-dom";
class SecondMDRecommand extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    const { filtering } = this.props;
    console.log(filtering);

    return (
      <div>
        <Slider {...settings}>
          {filtering?.map(data => {
            return (
              <div className="MDRcommanCard">
                <Link className="MDLink" to="/">
                  <img src={data.image_url} alt={data.subcategory_name}></img>
                </Link>
                <div className="recommand__desc">
                  <Link className="recommand__link" to="/">
                    <p>{data.name}</p>
                  </Link>
                  <span>{Math.floor(data.price)}</span>
                  <p>{data.discount_percentage}</p>
                  <span className="savePrice">{data.savePrice}</span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default SecondMDRecommand;
