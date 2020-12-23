import React, { Component } from "react";
import BannerSlide from "./Slide/BannerSlide";
import RecommandGoods from "./RecommandGoods";
import YearEndSpecial from "./YearEndSpecial";
import EventNews from "./EventNews";
import BannerMain from "./BannerMain";
import MDRecommand from "./MDRecommand";
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
        <div className="home__mainBanner">
          <BannerSlide />
        </div>
        <RecommandGoods />
        <YearEndSpecial />
        <EventNews />
        <BannerMain />
        <MDRecommand />
      </>
    );
  }
}

export default Home;
