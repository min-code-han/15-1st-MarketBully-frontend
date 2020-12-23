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
    console.log("아이디 :", e.currentTarget.id);
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
                  <Link className="recommand__link" to="/">
                    <p>{data.name}</p>
                  </Link>
                  <p>{data.price}</p>
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
export default withRouter(FirstMDRecommand);
