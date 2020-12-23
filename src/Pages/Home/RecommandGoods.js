import React, { Component } from "react";
import RecommandSlide from "./Slide/RecommandSlide";
import "./config/RecommandSlide.scss";
class RecommandGoods extends Component {
  render() {
    return (
      <div className="goods">
        <div className="goods__header">
          <span>이 상품 어때요?</span>
        </div>
        <div className="goods__container">
          <RecommandSlide />
        </div>
      </div>
    );
  }
}

export default RecommandGoods;
