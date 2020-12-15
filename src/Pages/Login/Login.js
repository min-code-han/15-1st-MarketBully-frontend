import React from "react";
import "./Login.scss";
import "../../Styles/reset.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox: false,
    };
  }
  IsChecked = () => {
    this.setState({ checkbox: !this.state.checkbox });
    console.log(this.state.checkbox);
  };

  render() {
    return (
      <div className="Login">
        <div className="section-login">
          <p className="login-title">로그인</p>
          <form>
            <input type="text" placeholder="아이디를 입력해주세요" className="id box" />
            <input type="password" placeholder="비밀번호를 입력해주세요" className="password box" />
            <div className="check-and-find">
              <div className="checkbox-wrap">
                <input
                  type="checkbox"
                  id="security"
                  onClick={this.IsChecked}
                  checked={this.state.checkbox}
                />
                <label htmlFor="security">보안접속</label>
              </div>
              <div className="find-account">
                <p>아이디 찾기</p>
                <span></span>
                <p>비밀번호 찾기</p>
              </div>
            </div>
            <button className="login box">로그인</button>
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
