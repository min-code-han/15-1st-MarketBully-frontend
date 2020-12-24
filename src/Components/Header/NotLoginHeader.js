import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./NotLoginHeader.scss";

class NotLoginHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { serviceHover: false };
  }
  onMouseServiceHover = () => {
    this.setState({
      serviceHover: !this.state.serviceHover,
    });
  };
  render() {
    return (
      <>
        <ul className="headerMenu NotLogin">
          <li>
            <Link to="/Signup">회원가입</Link>
          </li>
          <li>
            <Link to="/Login">로그인</Link>
          </li>
          <li onMouseEnter={this.onMouseServiceHover} onMouseLeave={this.onMouseServiceHover}>
            <Link className="ServiceCenterto" to="/Login">
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
            <Link className="deliverNone" to="/Login">
              배송지역 검색
            </Link>
          </li>
        </ul>
      </>
    );
  }
}

export default withRouter(NotLoginHeader);
