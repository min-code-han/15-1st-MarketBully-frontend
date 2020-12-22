import React, { Component } from "react";
import "./Signup.scss";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalActive: false,
      showIdDetail: false,
      showPwDetail: false,
      showCheckPwDetail: false,
      validateId: false,
      validatePw: false,
      validatePwLength: false,
      isPwSame: false,

      account: "",
      password: "",
      name: "",
      email: "",
      phoneNumber: "",
      gender: "",
      recommend: "",
      year: "",
      month: "",
      day: "",
      agree: [true, true, true, true, true],
    };
  }

  getValue = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleModal = () => {
    this.setState({ isModalActive: !this.state.isModalActive });
  };

  openIdDetail = () => {
    this.setState({ showIdDetail: true });
  };

  openPwDetail = () => {
    this.setState({ showPwDetail: true });
  };

  openCheckPwDetail = () => {
    this.setState({ showCheckPwDetail: true });
  };

  validationId = e => {
    const { value } = e.target;
    this.setState({ account: value });
    const txt = /^[a-z]{6,}$/;
    const numtxt6 = /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/;
    const both = txt.test(value) || numtxt6.test(value);
    if (both) {
      this.setState({ validateId: true });
    } else {
      this.setState({ validateId: false });
    }
  };

  validationPW = e => {
    const { value } = e.target;
    this.setState({ password: value });
    const txt10 = /.{10,}$/;
    const numtxt10 = /^(?=.*[0-9])(?=.*[a-zA-Z]).{10,}$/; // 영문 + 숫자 합쳐서 10개 이상 !!!
    const txtemoji10 = /^(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{10,}$/; // 영문 + 특수기호 합쳐서 10개 이상 !!!
    const numemoji10 = /^(?=.*[0-9])(?=.*[!@#$%^&*()_+]).{10,}$/; // 특수문자 + 숫자 합쳐서 10개 이상 !!!
    const numtxtemoji10 = /^(?=.*[0-9])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{10,}$/; //영문+숫자+특수문자 10자 이상
    const allCorrect =
      numtxt10.test(value) ||
      txtemoji10.test(value) ||
      numemoji10.test(value) ||
      numtxtemoji10.test(value);

    if (txt10.test(value)) {
      this.setState({ validatePwLength: true });
    } else {
      this.setState({ validatePwLength: false });
    }
    if (allCorrect) {
      this.setState({ validatePw: true });
    } else {
      this.setState({ validatePw: false });
    }
  };

  checkPwAgain = e => {
    const nowPw = this.state.password;
    const newPw = e.target.value;

    if (nowPw === newPw) {
      this.setState({ isPwSame: true });
    } else {
      this.setState({ isPwSame: false });
    }
  };

  validateEmail = e => {
    const emailValidation = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    const userEmail = this.state.email;
    if (emailValidation.test(userEmail)) {
      alert("사용 가능한 이메일 입니다");
    } else {
      alert("잘못된 이메일 형식 입니다.");
    }
  };

  selectGender = e => {
    const GENDER_ID = {
      male: 0,
      woman: 1,
      none: 2,
    };
    this.setState({ gender: GENDER_ID[e.target.id] });
  };

  selectRecommend = e => {
    this.setState({ recommend: e.target.id });
  };

  // 세상에나아아ㅏ아ㅏ아아ㅏ
  clickTerms = e => {
    const updatedAgree = this.state.agree;

    updatedAgree[e.target.id] = !updatedAgree[e.target.id];
    console.log(updatedAgree);
    console.log(updatedAgree[e.target.id]);
    console.log([e.target.id]);

    this.setState({ agree: updatedAgree });
  };

  all = () => {
    const { agree } = this.state;
    const agreeAll = agree[0] && agree[1] && agree[2] && agree[3] && agree[4];
    if (agreeAll) {
      this.setState({ agree: [false, false, false, false, false] });
    } else {
      this.setState({ agree: [true, true, true, true, true] });
    }
  };

  render() {
    const { agree } = this.state;
    const { clickTerms } = this;
    const agreeAll = agree[0] && agree[1] && agree[2] && agree[3] && agree[4];

    return (
      <>
        <div className="Signup">
          <div className="signup-wrap">
            <h1>회원가입</h1>
            <p>
              <i className="sub">*</i> 필수입력사항
            </p>
            <table className="info">
              <tr>
                <th>
                  아이디<i className="sub">*</i>
                </th>
                <td>
                  <input
                    id="id"
                    className="inputbox-commonstyle"
                    type="text"
                    placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                    onClick={this.openIdDetail}
                    onKeyUp={this.validationId}
                  />
                  <button className="button small-btn">중복확인</button>
                  <p className={"guide " + (this.state.showIdDetail ? "show" : "hide")}>
                    <span className={this.state.validateId ? "true" : "false"}>
                      &middot; 6자 이상의 영문 혹은 영문과 숫자를 조합
                    </span>
                    <span>&middot; 아이디 중복확인</span>
                  </p>
                </td>
              </tr>
              <tr>
                <th>
                  비밀번호<i className="sub">*</i>
                </th>
                <td>
                  <input
                    className="inputbox-commonstyle"
                    type="text"
                    placeholder="비밀번호를 입력해주세요"
                    onClick={this.openPwDetail}
                    onKeyUp={this.validationPW}
                  />
                  <p className={"guide " + (this.state.showPwDetail ? "show" : "hide")}>
                    <span className={this.state.validatePwLength ? "true" : "false"}>
                      &middot; 10자 이상 입력
                    </span>
                    <span className={this.state.validatePw ? "true" : "false"}>
                      &middot; 영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <th>
                  비밀번호 확인<i className="sub">*</i>
                </th>
                <td>
                  <input
                    className="inputbox-commonstyle"
                    type="text"
                    placeholder="비밀번호를 한번더 입력해주세요"
                    onClick={this.openCheckPwDetail}
                    onKeyUp={this.checkPwAgain}
                  />
                  <p className={"guide " + (this.state.showCheckPwDetail ? "show" : "hide")}>
                    <span className={this.state.isPwSame ? "true" : "false"}>
                      &middot; 동일한 비밀번호를 입력해주세요.
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <th>
                  이름<i className="sub">*</i>
                </th>
                <td>
                  <input
                    id="name"
                    className="inputbox-commonstyle"
                    type="text"
                    placeholder="이름을 입력해주세요"
                    onChange={this.getValue}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  이메일<i className="sub">*</i>
                </th>
                <td>
                  <input
                    id="email"
                    className="inputbox-commonstyle"
                    type="text"
                    placeholder="예:marketbully@kurly.com"
                    onChange={this.getValue}
                  />
                  <button className="button small-btn" onClick={this.validateEmail}>
                    중복확인
                  </button>
                </td>
              </tr>
              <tr>
                <th>
                  휴대폰<i className="sub">*</i>
                </th>
                <td>
                  <input
                    id="phoneNumber"
                    className="inputbox-commonstyle"
                    type="text"
                    placeholder="숫자만 입력해주세요"
                    onChange={this.getValue}
                  />
                  <button className="button gray-btn">인증번호 받기</button>
                </td>
              </tr>
              <tr>
                <th>
                  주소<i className="sub">*</i>
                </th>
                <td>
                  <button className="big-btn">
                    <i class="fas fa-search"></i>주소검색
                  </button>
                  <p className="guide">
                    <span>배송지에 따라 상품 정보가 달라질 수 있습니다.</span>
                  </p>
                </td>
              </tr>
              <tr className="sex">
                <th>성별</th>
                <td className="fw-400">
                  <label id="man" onClick={this.selectGender}>
                    <input type="radio" name="gender" />
                    남자
                  </label>

                  <label id="woman" onClick={this.selectGender}>
                    <input type="radio" name="gender" />
                    여자
                  </label>

                  <label id="none" onClick={this.selectGender}>
                    <input type="radio" name="gender" />
                    선택안함
                  </label>
                </td>
              </tr>
              <tr>
                <th>생년월일</th>
                <td>
                  <div className="birth-input-wrap">
                    <input
                      type="text"
                      placeholder="YYYY"
                      maxlength="4"
                      id="year"
                      onChange={this.getValue}
                    />
                    <span>/</span>
                    <input
                      type="text"
                      placeholder="MM"
                      maxlength="2"
                      id="month"
                      onChange={this.getValue}
                    />
                    <span>/</span>
                    <input
                      type="text"
                      placeholder="DD"
                      maxlength="2"
                      id="day"
                      onChange={this.getValue}
                    />
                  </div>
                  <p className="guide">
                    <span className="red">x 태어난 월을 정확하게 입력해주세요.</span>
                  </p>
                </td>
              </tr>
              <tr className="sex">
                <th>추가입력 사항</th>
                <td className="fw-400">
                  <label id="recommendId" onClick={this.selectRecommend}>
                    <input type="radio" name="recommend" />
                    추천인 아이디
                  </label>

                  <label id="recommendEvent" onClick={this.selectRecommend}>
                    <input type="radio" name="recommend" />
                    참여 이벤트명
                  </label>

                  <div className="joinevent">
                    <input
                      type="text"
                      placeholder="참여 이벤트명을 입력해주세요"
                      className="inputbox-commonstyle mt-24"
                    />
                    <div className="event-txt">
                      <p className="guide">
                        <span>추천인 아이디와 참여 이벤트면 중 하나만 선택 가능합니다.</span>
                        <span>가입 이후, 수정이 불가능합니다.</span>
                        <span>대소문자 및 띄어쓰기에 유의해주세요</span>
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
            <div className="under-line" />
            <table className="agree">
              <tr>
                <th>
                  이용약관동의<i className="sub">*</i>
                </th>
                <td>
                  <div className="agree-txt">
                    <div className="ageree-check">
                      <label className="check-all">
                        <input type="checkbox" checked={agreeAll} onClick={this.all} />
                        전체 동의합니다
                      </label>
                      <p className="guide">
                        <span>
                          선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수
                          있습니다.
                        </span>
                      </p>
                    </div>
                    <div className="ageree-check">
                      <label>
                        <input id="0" type="checkbox" checked={agree[0]} onClick={clickTerms} />
                        이용약관 동의<span className="necessary">(필수)</span>
                      </label>
                      <p className="purple-txt see-more">
                        약관보기<i class="fas fa-chevron-right see-more-ico"></i>
                      </p>
                    </div>
                    <div className="ageree-check">
                      <label>
                        <input id="1" type="checkbox" checked={agree[1]} onClick={clickTerms} />
                        개인정보처리방침 동의<span className="necessary">(필수)</span>
                      </label>
                      <p className="purple-txt see-more">
                        약관보기<i class="fas fa-chevron-right see-more-ico"></i>
                      </p>
                    </div>
                    <div className="ageree-check">
                      <label>
                        <input id="2" type="checkbox" checked={agree[2]} onClick={clickTerms} />
                        개인정보처리방침 동의<span className="necessary">(필수)</span>
                      </label>
                      <p className="purple-txt see-more">
                        약관보기<i class="fas fa-chevron-right see-more-ico"></i>
                      </p>
                    </div>
                    <div className="ageree-check">
                      <label>
                        <input id="3" type="checkbox" checked={agree[3]} onClick={clickTerms} />
                        무료배송, 할인쿠폰 등 혜택/정보 수신 동의
                        <span className="necessary">(선택)</span>
                      </label>
                      <div className="check-news">
                        <label className="sms">
                          <input type="checkbox" />
                          SMS
                        </label>

                        <label>
                          <input type="checkbox" />
                          이메일
                        </label>
                        <p className="purple-txt if-you-agree">
                          <span className="detail"></span>
                          동의 시 한 달간[5% 적립]+[무제한 무료배송]
                          <span className="necessary">(첫 주문 후 적용)</span>
                        </p>
                      </div>
                    </div>
                    <div className="ageree-check">
                      <label>
                        <input id="4" type="checkbox" checked={agree[4]} onClick={clickTerms} />
                        본인은 만 14세 이상입니다.<span className="necessary">(필수)</span>
                      </label>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
            <button className="make-account" onClick={this.handleModal}>
              가입하기
            </button>
          </div>
        </div>
        <div className={"Signup-modal " + (this.state.isModalActive ? "show" : "hide")}>
          <div className="modal-box">
            <div className="alert">
              <p>알림메세지</p>
              <button onClick={this.handleModal}>
                <i class="fas fa-times"></i>
              </button>
            </div>
            <p>아이디를 입력해 주세요</p>
            <div className="modal-btn">
              <button onClick={this.handleModal}>확인</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Signup;
