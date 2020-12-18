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
    e.preventDefault();
    const { id, password } = this.state;
    console.log(id);
    const num = /^[0-9]{1,}$/; //숫자 하나 이상
    const txt = /^[A-Za-z]{6,}$/; // 알파벳 6자이상 !!!
    const emoji = /^[!@#$%^&*()_+]{1,}$/; //특수문자 하나이상
    const numtxt6 = /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/; // 영문 + 숫자 합쳐서 6개 이상 !!!

    const numtxt10 = /^(?=.*[0-9])(?=.*[a-zA-Z]).{10,}$/; // 영문 + 숫자 합쳐서 10개 이상 !!!
    const txtemoji10 = /^(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{10,}$/; // 영문 + 특수기호 합쳐서 10개 이상 !!!
    const numemoji10 = /^(?=.*[0-9])(?=.*[!@#$%^&*()_+]).{10,}$/; // 특수문자 + 숫자 합쳐서 10개 이상 !!!

    const checkIdValidation = txt.test(id) || numtxt6.test(id);
    const checkPwValidation =
      numtxt10.test(password) || txtemoji10.test(password) || numemoji10.test(password);

    if (checkIdValidation && checkPwValidation) {
      alert("로그인 성공");
    } else if (!checkIdValidation && checkPwValidation) {
      alert("아이디를 잘못 입력하셨습니다.");
    } else if (checkIdValidation && !checkPwValidation) {
      alert("비밀번호를 잘못 입력하셨습니다");
    } else if (!checkIdValidation && !checkPwValidation) {
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
              type="password"
              placeholder="비밀번호를 입력해주세요"
              id="password"
              className="password box"
              onChange={this.handleValue}
            />
            <div className="check-and-find">
              <div className="checkbox-wrap">
                <label>
                  <input type="checkbox" />
                  보안접속
                </label>
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
