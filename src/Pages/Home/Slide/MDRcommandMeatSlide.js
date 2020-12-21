import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slide from "react-slick";
import "../config/MDRcommandSlide.scss";
export default class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LimmitedData: [],
    };
  }

  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 4,
    };

    const { filtering, limmit, mode } = this.props;
    const FirstLimmit = limmit.slice(0, 8);
    const filteringLimmit = filtering.slice(0, 8);
    console.log(filtering);
    return (
      <>
        <Slide className="ddd" {...settings}>
          {filtering?.map(filteringLimmit => {
            return (
              filteringLimmit.filterName === "meat" && (
                <div className="MDRcommanCard">
                  <Link className="MDLink" to="/">
                    <img src={filteringLimmit.imgUrl} alt="meat" />
                    <div className="MDRcommanSlideDesc">
                      <span>{filteringLimmit.companyName}</span>
                      <span>{filteringLimmit.productName}</span>
                      <span>{filteringLimmit.price}</span>
                      <span>{filteringLimmit.savePrice}</span>
                    </div>
                  </Link>
                </div>
              )
            );
          })}
        </Slide>

        <Slide className="hi" {...settings}>
          {filtering?.map(filteringLimmit => {
            return (
              filteringLimmit.filterName === "sss" && (
                <div className="MDRcommanCard">
                  <Link className="MDLink" to="/">
                    <img src={filteringLimmit.imgUrl} alt="meat" />
                    <div className="MDRcommanSlideDesc">
                      <span>{filteringLimmit.companyName}</span>
                      <span>{filteringLimmit.productName}</span>
                      <span>{filteringLimmit.price}</span>
                      <span>{filteringLimmit.savePrice}</span>
                    </div>
                  </Link>
                </div>
              )
            );
          })}
        </Slide>
      </>
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
