import React from "react";
import "./Login.scss";
import "../../Styles/reset.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
    };
  }

  handleValue = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  checkValidation = e => {
    e.preventDefault();
    const { id, password } = this.state;
    const checkId = id.includes("@");
    const checkPw = password.number;

    if (checkId && checkPw) {
      alert("로그인을 성공하셨습니다 😉 ");
    }

    if (!checkId) {
      alert("아이디는 @ 를 포함해야 합니다");
    }

    if (!checkPw) {
      alert("비밀번호가 틀립니다");
    }

    if (!checkId && checkPw) {
      alert("로그인에 실패하셨습니다");
    }
  };

  render() {
    return (
      <div className="Login">
        <div className="section-login">
          <h1 className="login-title">로그인</h1>
          <form>
            <input
              type="text"
              placeholder="아이디를 입력해주세요"
              id="id"
              className="id box"
              onChange={this.handleValue}
            />
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              id="password"
              className="password box"
              onChange={this.handleValue}
            />
            <div className="check-and-find">
              {" "}
              <div className="checkbox-wrap">
                <input type="checkbox" id="security" />
                <label htmlFor="security">보안접속</label>
              </div>
              <div className="find-account">
                <p>아이디 찾기</p>
                <span></span>
                <p>비밀번호 찾기</p>
              </div>
            </div>
            <button className="login box" onClick={this.checkValidation}>
              로그인
            </button>
            <a href="#" className="login-to-assign">
              회원가입
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
