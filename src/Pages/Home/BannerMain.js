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
      <>
        <div className="bnrMain">
          <Link style={{ display: "block", width: "inherit", height: "inherit" }} to="/">
            <img src="./images/밥상.jpg"></img>
          </Link>
        </div>
      </>
    );
  }
}

export default BannerMain;
