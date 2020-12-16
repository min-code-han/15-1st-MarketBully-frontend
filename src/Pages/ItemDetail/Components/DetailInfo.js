/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import "./DetailInfo.scss";

class DetailInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="DetailInfo">
        <table>
          <tr>
            <th>항목1</th>
            <td>내용1</td>
            <th>항목2</th>
            <td>내용2</td>
          </tr>
          <tr>
            <th>항목1</th>
            <td>내용1</td>
            <th>항목2</th>
            <td>내용2</td>
          </tr>
          <tr>
            <th>항목1</th>
            <td>내용1</td>
            <th>항목2</th>
            <td>내용2</td>
          </tr>
          <tr>
            <th>항목1</th>
            <td>내용1</td>
            <th>항목2</th>
            <td>내용2</td>
          </tr>
          <tr>
            <th>항목1</th>
            <td>내용1</td>
            <th>항목2</th>
            <td>내용2</td>
          </tr>
        </table>
        <div className="why-bully">
          <h1>WHY BULLY</h1>
        </div>
        <div className="custumer-center-guide">
          <h1>고객행복센터</h1>
          <h2>궁금하신 점이나 서비스 이용에 불편한 점이 있으신가요?</h2>
          <h3>문제가 되는 부분은 Bully가 해결해 드리겠습니다.</h3>
          <div className="contact">
            <div className="call">
              <h3>전화 문의 9292-9292</h3>
              <p>오전 5시 ~ 오후 11시 (연중무휴)</p>
            </div>
            <div className="kakaotalk">
              <h3>카카오톡 문의</h3>
              <p>오전 5시 ~ 오후 11시 (연중무휴)</p>
              <p className="small">
                카카오톡에서 '마켓불리'를 검색 후 대화창에 문의 및 불편사항을 남겨주세요.
              </p>
            </div>
            <div className="homepage">
              <h3>홈페이지 문의</h3>
              <p>24시간 접수 가능</p>
              <p>
                로그인 {">"} 마이컬리 {">"} 1:1 문의
              </p>
              <p className="small">고객센터 운영 시간에 순차적으로 답변드리겠습니다.</p>
            </div>
          </div>
          <div className="cancel-order-guide">
            <h3>주문 취소 안내</h3>
            <div>
              <p>
                <span>[입금 확인] 단계</span>
                주문 내역 상세페이지에서 직접 취소하실 수 있습니다.
              </p>
              <p>
                <span>[입금 확인] 이후 단계</span>
                고객행복센터로 문의해주세요.
              </p>
              <p>
                <span>결제 승인 취소 / 환불</span>
                결제 수단에 따라 영업일 기준 3~7일 내에 처리해드립니다.
              </p>
            </div>
            <button>자세히 보기</button>
          </div>
          <div className="refund-guide">
            <h3>교환 환불 안내</h3>
            <div>
              <p>고객님의 단순 변심으로 인한 반품은 어려울 수 있으니 양해 부탁드립니다.</p>
            </div>
            <button>자세히 보기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailInfo;
