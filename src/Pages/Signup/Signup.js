import React, { Component } from "react";
import "./Signup.scss";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
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
                  className="inputbox-commonstyle"
                  type="text"
                  placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                />
                <button className="button small-btn">중복확인</button>
                <p className="guide">
                  <span>&middot; 6자 이상의 영문 혹은 영문과 숫자를 조합</span>
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
                  placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                />
                <p className="guide">
                  <span>&middot; 10자 이상 입력</span>
                  <span>&middot; 영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합</span>
                  <span>&middot; 동일한 숫자 3개 이상 연속 사용 불가</span>
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
                />
                <p className="guide">
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
            <tr>
              <th>성별</th>
              <td className="fw-400">
                <label htmlFor="man">
                  <span className="radio-ico"></span>
                  <input type="radio" id="man" name="gender" />
                  남자
                </label>
                <label htmlFor="woman">
                  <span className="radio-ico"></span>
                  <input type="radio" id="woman" name="gender" />
                  여자
                </label>
                <label htmlFor="none">
                  <span className="radio-ico">
                    <span className="radio-checked"></span>
                  </span>
                  <input type="radio" id="none" name="gender" />
                  선택안함
                </label>
              </td>
            </tr>
            <tr>
              <th>생년월일</th>
              <td>
                <div className="birth-input-wrap">
                  <input type="text" placeholder="YYYY" />
                  <span>/</span>
                  <input type="text" placeholder="MM" />
                  <span>/</span>
                  <input type="text" placeholder="DD" />
                </div>
                <p className="guide">
                  <span className="red">x 태어난 월을 정확하게 입력해주세요.</span>
                </p>
              </td>
            </tr>
            <tr>
              <th>추가입력 사항</th>
              <td className="fw-400">
                <label htmlFor="id">
                  <span className="radio-ico"></span>
                  <input type="radio" id="id" name="recommend" />
                  추천인 아이디
                </label>
                <label htmlFor="event">
                  <span className="radio-ico"></span>
                  <input type="radio" id="event" name="recommend" />
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
          <div className="under-line"></div>
        </div>
        <div className="agree">
          <table>
            <tr>
              <th>
                이용약관동의<i className="sub">*</i>
              </th>
            </tr>
            <td>
              <div className="agree-txt">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </td>
          </table>
        </div>
      </div>
    );
  }
}

export default Signup;
