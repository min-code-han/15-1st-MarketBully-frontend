import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slide from "react-slick";
import "../config/MDRcommandSlide.scss";
export default class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LimmitedData: [],
      data: [],
    };
  }

  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
    };

    const { filtering, limmit, mode } = this.props;
    const FirstLimmit = limmit.slice(0, 8);
    const filteringLimmit = filtering.slice(0, 8);

    // filtering.map(a => {
    //   console.log(a.subcategory_name);
    // });

    return (
      <Slide {...settings}>
        <div className="MDRcommanCard">
          <Link className="MDLink" to="/">
            <img src="./images/111.jpg" alt="meat" />
            <div className="MDRcommanSlideDesc"></div>{" "}
          </Link>{" "}
        </div>
      </Slide>

      <Slide className="hi" {...settings}>
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
      </Slide>

      // {mode ? null : (
      //   <Slide {...settings}>
      //     {FirstLimmit?.map(FirstLimmit => {
      //       return (
      //         <div className="MDRcommanCard">
      //           <Link className="MDLink" to="/">
      //             <img src={FirstLimmit.imgUrl} alt="meat" />
      //             <div className="MDRcommanSlideDesc">
      //               <span>{FirstLimmit.companyName}</span>
      //               <span>{FirstLimmit.productName}</span>
      //               <span>{FirstLimmit.price}</span>
      //               <span>{FirstLimmit.savePrice}</span>
      //             </div>
      //           </Link>
      //         </div>
      //       );
      //     })}
      //   </Slide>
      // )}
    );
  }
}
