import React, { Component } from "react";
import BannerSlide from "./Slide/BannerSlide";
import RecommandGoods from "./RecommandGoods";
import YearEndSpecial from "./YearEndSpecial";
import EventNews from "./EventNews";
import BannerMain from "./BannerMain";
import MDRcommand from "./MDRcommand";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {/* MainBanner Slide */}
        <div className="home__mainBanner">
          <BannerSlide />
        </div>
        {/* Recommand Item List*/}
        <RecommandGoods />
        {/* Year-end special */}
        <YearEndSpecial />
        {/* EventNews */}
        <EventNews />
        {/* BannerMain */}
        <BannerMain />
        {/* MDRcommand */}
        <MDRcommand />
      </>
    );
  }
}

export default Home;
