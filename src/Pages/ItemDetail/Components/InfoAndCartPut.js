/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import "./InfoAndCartPut.scss";

const itemData = {
  id: 1,
  name: "무농약 토마토",
  shortDescription: "친환경으로 재배한 신선한 무농약 토마토",
  price: 7650,
  sellUnit: "1개",
  weight: "1kg",
  deliveryType: "샛별배송/택배배송",
  originCountry: "국산",
  packageType: "냉장/종이포장",
  allergyInfo: [
    "소고기 함유",
    "본 제품은 돼지고기를 사용한 제품과 같은 제조시설에서 제조했습니다.",
  ],
  shelfLife: "수령일 포함 4일 이상 남은 상품을 보내드립니다.",
};
const allergyInfo = [];
for (let i = 0; i < itemData.allergyInfo.length; i++) {
  allergyInfo.push(itemData.allergyInfo[i], <br />);
}

const itemDetailInfo = [
  { title: "판매단위", content: itemData.sellUnit },
  { title: "중량/용량", content: itemData.weight },
  { title: "배송구분", content: itemData.deliveryType },
  { title: "원산지", content: itemData.originCountry },
  { title: "포장타입", content: itemData.packageType },
  {
    title: "유통기한",
    content: itemData.shelfLife,
  },
  {
    title: "알레르기 정보",
    content: allergyInfo,
  },
];
class InfoAndCartPut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  handleQuantity = e => {
    const QUANTITY_MIN = 1;
    const currentQuantity = this.state.quantity;
    const type = e.target.className;
    if (currentQuantity === QUANTITY_MIN && type === "subtract") return;
    this.setState({
      quantity: type === "add" ? currentQuantity + 1 : currentQuantity - 1,
    });
  };

  render() {
    const { quantity } = this.state;
    const userMileageClass = 0.005;
    const mileage = Math.ceil(itemData.price * userMileageClass * quantity);
    return (
      <div className="InfoAndCartPut">
        <div className="item-image">
          <img src="images/tomato.jpg" alt="tomato"></img>
        </div>
        <div className="item-detail-right">
          <div className="item-info">
            <div className="item-name">
              <h1>{itemData.name}</h1>
              <span>
                <i className="fas fa-share-alt" />
              </span>
            </div>
            <h3>{itemData.shortDescription}</h3>
            <div className="price">
              <span className="on-login">회원할인가</span>
              <div class="real-price">
                <span>{itemData.price}</span>
                <div className="unit">원</div>
                <span className="sale-percentage">15%</span>
              </div>
              <span className="nosale-price">
                <span className="price">8800원</span>
                <i class="far fa-question-circle"></i>
              </span>
            </div>
            <div className="point-guide">
              <span className="member-class">일반 0.5%</span>
              <span className="point-save">개당 50원 적립</span>
            </div>
            <ul className="item-info-list">
              {itemDetailInfo.map(({ title, content }) => {
                return (
                  <li key={title}>
                    <p className="title">{title}</p>
                    <p className="content">{content}</p>
                  </li>
                );
              })}
              <li className="buy-quantity">
                <span className="title">구매수량</span>
                <button className="subtract" onClick={this.handleQuantity}>
                  -
                </button>
                <input value={this.state.quantity} disabled />
                <button className="add" onClick={this.handleQuantity}>
                  +
                </button>
              </li>
            </ul>
          </div>
          <div className="cart-put">
            <div className="price-box">
              <span className="total">총 상품금액 : </span>
              <span className="price">{itemData.price * quantity}</span>
              <span className="unit"> 원</span>
            </div>
            <div className="point-guide">
              <span className="point">적립</span>
              <span className="guide">구매 시 {mileage}원 적립</span>
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
