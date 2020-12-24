import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./config/YearEndSpecial.scss";
class YearEndSpecial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="year__end__container">
          <div className="year__end__left">
            <h2>연말특가</h2>
            <span>12월 한 달간 진행되는 24시간 한정특가</span>
            <span>망설이면 늦어요!</span>
          </div>
          <div className="yaer__end__right">
            <Link style={{ textDecoration: "none", color: "#000", overflow: "hidden" }} to="/">
              {" "}
              <div className="year__end__image">
                <img src="images/스테이크.jpg" alt="meat"></img>
              </div>
              <div className="year__desc">
                <span>[더플랜] 찹쌀 등심 탕수육 (소스포함)</span>
                <span>한입에 쏙 들어가는 쫄깃한 별미</span>
                <div className="yaer__price">
                  <span>5,530원 </span>
                  <span>7,900원</span>
                  <span>30%</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default YearEndSpecial;
