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
      id: "",
      validateId: false,
    };
  }

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
    const { id, value } = e.target;
    this.setState({ [id]: value });

    const txt = /^[A-Za-z]{5,}$/;
    const numtxt6 = /^(?=.*[0-9])(?=.*[a-zA-Z]){5,}$/;
    const checkIdValidation = txt.test(this.state.id) || numtxt6.test(this.state.id);

    if (checkIdValidation) {
      this.setState({ validateId: true });
    } else {
      this.setState({ validateId: false });
    }
  };

  render() {
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
                    onChange={this.validationId}
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
                  />
                  <p className={"guide " + (this.state.showPwDetail ? "show" : "hide")}>
                    <span>&middot; 10자 이상 입력</span>
                    <span>&middot; 영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합</span>
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
                    placeholder="비밀번호를 입력해주세요"
                    onClick={this.openCheckPwDetail}
                  />
                  <p className={"guide " + (this.state.showCheckPwDetail ? "show" : "hide")}>
                    <span>&middot; 동일한 비밀번호를 입력해주세요.</span>
                  </p>
                </td>
              </tr>
              <tr>
                <th>
                  이름<i className="sub">*</i>
                </th>
                <td>
                  <input
                    className="inputbox-commonstyle"
                    type="text"
                    placeholder="비밀번호를 한번더 입력해주세요"
                  />
                </td>
              </tr>
              <tr>
                <th>
                  이메일<i className="sub">*</i>
                </th>
                <td>
                  <input
                    className="inputbox-commonstyle"
                    type="text"
                    placeholder="예:marketbully@kurly.com"
                  />
                  <button className="button small-btn">중복확인</button>
                </td>
              </tr>
              <tr>
                <th>
                  휴대폰<i className="sub">*</i>
                </th>
                <td>
                  <input
                    className="inputbox-commonstyle"
                    type="text"
                    placeholder="숫자만 입력해주세요"
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
                  <input type="radio" id="man" name="gender" />
                  <label htmlFor="man">남자</label>

                  <input type="radio" id="woman" name="gender" />
                  <label htmlFor="woman">여자</label>

                  <input type="radio" id="none" name="gender" />
                  <label htmlFor="none">선택안함</label>
                </td>
              </tr>
              <tr>
                <th>생년월일</th>
                <td>
                  <div className="birth-input-wrap">
                    <input type="text" placeholder="YYYY" maxlength="4" />
                    <span>/</span>
                    <input type="text" placeholder="MM" maxlength="2" />
                    <span>/</span>
                    <input type="text" placeholder="DD" maxlength="2" />
                  </div>
                  <p className="guide">
                    <span className="red">x 태어난 월을 정확하게 입력해주세요.</span>
                  </p>
                </td>
              </tr>
              <tr className="sex">
                <th>추가입력 사항</th>
                <td className="fw-400">
                  <input type="radio" id="id" name="recommend" />
                  <label htmlFor="id">추천인 아이디</label>
                  <input type="radio" id="event" name="recommend" />
                  <label htmlFor="event">참여 이벤트명</label>
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
            <div className="under-line"></div>
            <table className="agree">
              <tr>
                <th>
                  이용약관동의<i className="sub">*</i>
                </th>
                <td>
                  <div className="agree-txt">
                    <div className="ageree-check">
                      <input type="checkbox" id="all" />
                      <label htmlFor="all" className="check-all">
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
                      <input type="checkbox" id="use" />
                      <label htmlFor="use">
                        이용약관 동의<span className="necessary">(필수)</span>
                      </label>
                      <p className="purple-txt see-more">
                        약관보기<i class="fas fa-chevron-right see-more-ico"></i>
                      </p>
                    </div>
                    <div className="ageree-check">
                      <input type="checkbox" id="personal" />
                      <label htmlFor="personal">
                        개인정보처리방침 동의<span className="necessary">(필수)</span>
                      </label>
                      <p className="purple-txt see-more">
                        약관보기<i class="fas fa-chevron-right see-more-ico"></i>
                      </p>
                    </div>
                    <div className="ageree-check">
                      <input type="checkbox" id="personal2" />
                      <label htmlFor="personal2">
                        개인정보처리방침 동의<span className="necessary">(필수)</span>
                      </label>
                      <p className="purple-txt see-more">
                        약관보기<i class="fas fa-chevron-right see-more-ico"></i>
                      </p>
                    </div>
                    <div className="ageree-check">
                      <input type="checkbox" id="coupon" />
                      <label htmlFor="coupon">
                        무료배송, 할인쿠폰 등 혜택/정보 수신 동의
                        <span className="necessary">(선택)</span>
                      </label>
                      <div className="check-news">
                        <input type="checkbox" id="sms" />
                        <label htmlFor="sms" className="sms">
                          SMS
                        </label>
                        <input type="checkbox" id="email" />
                        <label htmlFor="email">이메일</label>
                        <p className="purple-txt if-you-agree">
                          <span className="detail"></span>
                          동의 시 한 달간[5% 적립]+[무제한 무료배송]
                          <span className="necessary">(첫 주문 후 적용)</span>
                        </p>
                      </div>
                    </div>
                    <div className="ageree-check">
                      <input type="checkbox" id="fourteen" />
                      <label htmlFor="fourteen">
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
