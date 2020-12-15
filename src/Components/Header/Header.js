import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="header">
          {/* user__Menu */}
          <ul className="header__menu">
            <li className="header__signup">
              <a>회원가입</a>
            </li>
            <li className="header__login">
              <a>로그인</a>
            </li>
            <li className="header__customer">
              <a> 고객센터 </a>
            </li>
            <li className="header__search">
              <a>배송지역 검색</a>
            </li>
          </ul>
          {/* header__Logo */}
          <div className="header__logo">
            <img src="https://res.kurly.com/pc/service/common/1908/delivery_190819.gif"></img>
            <img src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png"></img>
          </div>
          {/* gnb  */}
          <div className="gnb">
            <ul className="gnb__menu__lists">
              <li className="gnb__menu__list">
                <a>전체 카테고리</a>
              </li>
              <li className="gnb__menu__list">
                <a>신상품</a>
              </li>
              <li className="gnb__menu__list">
                <a>베스트</a>
              </li>
              <li className="gnb__menu__list">
                <a>알뜰쇼핑</a>
              </li>
              <li className="gnb__menu__list">
                <a>이벤트</a>
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
      </>
    );
  }
}

export default Header;
