import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./LoginHeader.scss";
import NotLoginHeader from "./NotLoginHeader";
class LoginHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoHover: false,
      serviceHover: false,
    };
  }

  Logout = () => {
    localStorage.removeItem("token");
    this.props.handleLoginChanged();
  };
  onMouseHover = () => {
    this.setState({ infoHover: !this.state.infoHover });
  };
  onMouseServiceHover = () => {
    this.setState({
      serviceHover: !this.state.serviceHover,
    });
  };

  render() {
    const userInfo = "김찬영";
    return (
      <>
        <ul className="headerMenu Login">
          <li
            className="headerMenuList"
            onMouseEnter={this.onMouseHover}
            onMouseLeave={this.onMouseHover}
          >
            <Link className="uesrInfoLogin" to="">
              {userInfo}님
              {this.state.infoHover ? (
                <div className="uesrInfoMenu">
                  <ul>
                    <li>주문 내역</li>
                    <li>배송지 관리</li>
                    <li>늘 사는 것</li>
                    <li>상품 후기</li>
                    <li>적립금</li>
                    <li>쿠폰</li>
                    <li>개인 정보 수정</li>
                    <li onClick={this.Logout}>로그아웃</li>
                  </ul>
                </div>
              ) : null}
            </Link>
          </li>

          <li onMouseEnter={this.onMouseServiceHover} onMouseLeave={this.onMouseServiceHover}>
            <Link className="ServiceCenter" to="/Login">
              고객센터
            </Link>
            {this.state.serviceHover ? (
              <div className="servicMenu">
                <ul>
                  <li>공지 사항</li>
                  <li>자주하는 질문</li>
                  <li>1:1문의</li>
                  <li>대량주문 문의</li>
                  <li>상품제안</li>
                  <li>에코포장 피드백</li>
                </ul>
              </div>
            ) : null}
          </li>
          <li>
            <Link className="deliver" to="/Login">
              배송지역 검색
            </Link>
          </li>
        </ul>
      </>
    );
  }
}

export default withRouter(LoginHeader);
