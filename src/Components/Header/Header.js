import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <ul className="headerMenu">
          <li>
            <Link to="/">회원가입</Link>
          </li>
          <li>
            <Link to="/">로그인</Link>
          </li>
          <li>
            <Link to="/"> 고객센터</Link>
          </li>
          <li>
            <Link to="/">배송지역 검색</Link>
          </li>
        </ul>

        <div className="header__logo">
          <img src="https://res.kurly.com/pc/service/common/1908/delivery_190819.gif"></img>
          <img src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png"></img>
        </div>

        <div className="gnb">
          <ul>
            <li>
              <Link to="/">전체 카테고리</Link>
            </li>
            <li>
              <Link to="/">신상품</Link>
            </li>
            <li>
              <Link to="/">베스트</Link>
            </li>
            <li>
              <Link to="/">알뜰쇼핑</Link>
            </li>
            <li>
              <Link to="/">이벤트</Link>
            </li>
          </ul>
          <div className="gnb__search">
            <input />
          </div>
          <div className="gnb__cart">
            <img src="https://res.kurly.com/pc/ico/1908/ico_cart_x2_v2.png"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
