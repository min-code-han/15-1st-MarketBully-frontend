import React, { Component } from "react";
import Slider from "react-slick";
import "../config/MDRcommandSlide.scss";
import { Link, withRouter } from "react-router-dom";
class FirstMDRecommand extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToDetail = e => {
    this.props.history.push(`/ItemDetail/${e.currentTarget.id}`);
  };

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
            console.log(data.id);
            return (
              <div key={data.id} id={data.id} className="MDRcommanCard" onClick={this.goToDetail}>
                <Link className="MDLink">
                  <img src={data.image_url} alt={data.subcategory_name}></img>
                </Link>
                <div className="recommand__desc">
                  <Link className="recommand__link">
                    <p>{data.name}</p>
                  </Link>
                  <span>{Math.floor(data.price).toLocaleString("en")}</span>
                  <span className="save">
                    {Math.floor(data.price - data.price * data.discount_percentage).toLocaleString(
                      "en"
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
export default withRouter(FirstMDRecommand);
