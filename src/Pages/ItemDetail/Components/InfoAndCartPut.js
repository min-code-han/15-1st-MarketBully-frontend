import React, { Component } from "react";
import "./InfoAndCartPut.scss";

const itemDetailInfo = [
  { title: "판매단위", content: "1봉지" },
  { title: "중량/용량", content: "1kg" },
  { title: "배송구분", content: "샛별배송/택배배송" },
  { title: "원산지", content: "국산" },
  { title: "포장타입", content: "냉장/종이포장" },
  {
    title: "유통기한",
    content: "농산물로 별도의 유통기한은 없으나 가급적 빠르게 드시기 바랍니다.",
  },
  {
    title: "안내사항",
    content: "식품 특성상 중량은 3% 내외의 차이가 발생할 수 있습니다.",
  },
];

class InfoAndCartPut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="InfoAndCartPut">
        <div className="item-image">
          <img src="images/tomato.jpg" alt="tomato"></img>
        </div>
        <div className="item-detail-right">
          <div className="item-info">
            <div className="item-name">
              <h1>무농약 토마토</h1>
              <span>공유버튼</span>
            </div>
            <h3>친환경으로 재배한 무농약 토마토</h3>
            <div className="price">
              <span>9,980</span>
              <div className="unit">원</div>
            </div>
            <div className="point-guide">
              <span className="member-class">일반 0.5%</span>
              <span className="point-save">개당 50원 적립</span>
            </div>
            <ul className="item-info-list">
              {itemDetailInfo.map(({ title, content }) => {
                return (
                  <li key={title}>
                    <span className="title">{title}</span>
                    <span className="content">{content}</span>
                  </li>
                );
              })}
              <li className="buy-quantity">
                <span className="title">구매수량</span>
                <button className="left-btn">-</button>
                <input value="1" disabled />
                <button className="right-btn">+</button>
              </li>
            </ul>
          </div>
          <div className="cart-put">
            <div className="price-box">
              <span className="total">총 상품금액 : </span>
              <span className="price">9,980</span>
              <span className="unit"> 원</span>
            </div>
            <div className="point-guide">
              <span className="point">적립</span>
              <span className="guide">구매 시 50원 정립</span>
            </div>
            <div className="button-box">
              <button className="restock-notify">재입고 알림</button>
              <button className="alawys-buy">늘 사는 것</button>
              <button className="put-cart">장바구니 담기</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoAndCartPut;
