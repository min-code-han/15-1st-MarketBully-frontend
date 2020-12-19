import React, { Component } from "react";
import RecommandSlide from "./Slide/RecommandSlide";
import "./config/RecommandSlide.scss";
class RecommandGoods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/data.json")
      .then(res => res.json())
      .then(res => this.setState({ data: res.data }));
  };

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
