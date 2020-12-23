import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./config/BannerMain.scss";
class BannerMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="bnrMain">
        <Link to="/">
          <img src="./images/new.png" alt="yearEventBanner" />
        </Link>
      </div>
    );
  }
}

export default BannerMain;
