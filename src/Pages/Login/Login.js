import React from "react";
import "./Login.scss";

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
    console.log("checkValidation activated");
    e.preventDefault();
    const { id, password } = this.state;

    console.log(password);
    const checkIdValidation = /^[a-z0-9]{6,}$/;
    const checkPwValidation = /^[A-Za-z0-9@#$%^&+=]{10,}$/;

    console.log(checkIdValidation.test(id));
    console.log(checkPwValidation.test(password));

    if (checkIdValidation.test(id) && checkPwValidation.test(password)) {
      alert("로그인 성공");
    } else if (!checkIdValidation.test(id) && checkPwValidation.test(password)) {
      alert("아이디를 잘못 입력하셨습니다.");
    } else if (checkIdValidation.test(id) && !checkPwValidation.test(password)) {
      alert("비밀번호를 잘못 입력하셨습니다");
    } else if (!checkIdValidation.test(id) && !checkPwValidation.test(password)) {
      alert("아이디 또는 비밀번호 오류 입니다");
    } else {
      alert("넌뭔데");
    }
  };

  render() {
    return (
      <div className="Login">
        <div className="section-login">
          <h1 className="title">로그인</h1>
          <form>
            <input
              type="text"
              placeholder="아이디를 입력해주세요"
              id="id"
              className="id box"
              onChange={this.handleValue}
            />
            <input
              type="text"
              placeholder="비밀번호를 입력해주세요"
              id="password"
              className="password box"
              onChange={this.handleValue}
            />
            <div className="check-and-find">
              <div className="checkbox-wrap">
                <input type="checkbox" id="security" />
                <label htmlFor="security">보안접속</label>
              </div>
              <div className="find-account">
                <p>아이디 찾기</p>
                <div />
                <p>비밀번호 찾기</p>
              </div>
            </div>
            <button className="login box" onClick={this.checkValidation}>
              로그인
            </button>
            <div className="login-to-assign">회원가입</div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
