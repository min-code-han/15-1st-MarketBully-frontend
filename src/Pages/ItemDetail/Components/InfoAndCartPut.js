import React, { Component } from "react";
import "./InfoAndCartPut.scss";

class InfoAndCartPut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="InfoAndCartPut">
        <div className="item-image">
          <img src="images/tomato.jpg" alt="tomato"></img>
        </div>
        <div className="item-detail">
          <div className="item-info">
            <h1>무농약 토마토</h1>
            <h3>친환경으로 재배한 무농약 토마토</h3>
            <div>회원할인가</div>
            <div></div>
          </div>
          <div className="cart-put"></div>
        </div>
      </div>
    );
  }
}

export default InfoAndCartPut;
