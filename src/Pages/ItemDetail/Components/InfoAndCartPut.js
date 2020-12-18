/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import "./InfoAndCartPut.scss";

// key: 백엔드 데이터 키, value: 화면에 보이는 제목
const INFO_TITLE = {
  sellUnit: "판매단위",
  weight: "중량/용량",
  deliveryType: "배송구분",
  originCountry: "원산지",
  packageType: "포장타입",
  shelfLife: "유통기한",
  allergyInfo: "알레르기 정보",
};

class InfoAndCartPut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      itemData: [],
    };
  }

  getItemDetailData = async () => {
    const response = await fetch(`data/itemdetail.json`);
    const result = await response.json();
    this.setState({ itemData: result.itemInfo }, this.allergyUpdate);
  };
  allergyUpdate = () => {
    const newAllergyInfo = this.state.itemData.allergyInfo;

    console.log(newAllergyInfo);
  };
  componentDidMount() {
    this.getItemDetailData();
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

  refine;

  render() {
    const { quantity, itemData } = this.state;
    const userMileageClass = 0.005;
    const mileage = Math.ceil(itemData.price * userMileageClass * quantity);

    return (
      <div className="InfoAndCartPut">
        <div className="item-image">
          <img src="images/tomato.jpg" alt="tomato"></img>
        </div>
        <div className="item-detail-right">
          <div className="info">
            <div className="name">
              <h1>{itemData.name}</h1>
              <span>
                <i className="fas fa-share-alt" />
              </span>
            </div>
            <h3>{itemData.shortDescription}</h3>
            <div className="price">
              <span className="on-login">회원할인가</span>
              <div className="real-price">
                {/* 세일가격에서 10원 이하 절삭 */}
                <span>{Math.floor((itemData.price * (1 - itemData.sale)) / 10) * 10}</span>
                <div className="unit">원</div>
                <span className="sale-percentage">{itemData.sale * 100}%</span>
              </div>
              <span className="nosale-price">
                <span className="price">8800원</span>
                <i className="far fa-question-circle"></i>
              </span>
            </div>
            <div className="point-guide">
              <span className="member-class">일반 0.5%</span>
              <span className="point-save">개당 50원 적립</span>
            </div>
            <ul className="item-info-list">
              {Object.entries(itemData).map((title, content) => {
                if (!Object.keys(INFO_TITLE).includes(title[0])) return null;
                return (
                  <li key={title[0]}>
                    <p className="title">{INFO_TITLE[title[0]]}</p>
                    <p className="content">{title[1]}</p>
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
