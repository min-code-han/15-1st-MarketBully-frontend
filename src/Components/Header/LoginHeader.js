import React, { Component } from "react";

class LoginHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className="headerMenu">
        <li>
          <Link to="/home">회원가입</Link>
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
    );
  }
}

export default LoginHeader;
