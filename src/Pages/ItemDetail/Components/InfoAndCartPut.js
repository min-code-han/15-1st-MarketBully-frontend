/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import "./InfoAndCartPut.scss";

// key: 백엔드 데이터 키, value: 화면에 보이는 제목
const INFO_TITLE = {
  sellUnit: "판매단위",
  weight: "중량/용량",
  delivery_type: "배송구분",
  origin: "원산지",
  packaging_type: "포장타입",
  expiration_date: "유통기한",
  allergy: "알레르기 정보",
};

class InfoAndCartPut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      itemData: {},
    };
  }

  formatPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

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
    const { itemData } = this.props;
    const { formatPrice } = this;
    const userMileageClass = 0.005;
    // 세일 가격에서 10원 이하 절삭
    const discountedPrice =
      Math.floor((itemData.price * (1 - itemData.discount_percentage)) / 10) * 10;
    return (
      <div className="InfoAndCartPut">
        <div className="item-image">
          {itemData.image_url && <img src={itemData.image_url} alt={itemData.name} />}
        </div>
        <div className="item-detail-right">
          <div className="info">
            <div className="name">
              <h1>{itemData.name}</h1>
              <span>
                <i className="fas fa-share-alt" />
              </span>
            </div>
            <h3>{itemData.subtitle}</h3>
            <div className="price">
              <span className="on-login">회원할인가</span>
              <div className="real-price">
                <span>{formatPrice(discountedPrice)}</span>
                <div className="unit">원</div>
                <span className="sale-percentage">
                  {!(itemData.discount_percentage === 0) &&
                    `${itemData.discount_percentage * 100}%`}
                </span>
              </div>
              <span className="nosale-price">
                {!(itemData.discount_percentage === 0) && (
                  <>
                    <span className="price">{formatPrice(itemData.price)}원</span>
                    <i className="far fa-question-circle"></i>
                  </>
                )}
              </span>
            </div>
            <div className="point-guide">
              <span className="member-class">일반 0.5%</span>
              <span className="point-save">
                개당 {formatPrice(Math.ceil(discountedPrice * 0.005))}원 적립
              </span>
            </div>
            <ul className="item-info-list">
              {Object.entries(itemData).map(data => {
                if (!Object.keys(INFO_TITLE).includes(data[0])) return null;
                return (
                  <li key={data[0]}>
                    <p className="title">{INFO_TITLE[data[0]]}</p>
                    <p className="content">{data[1]}</p>
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
              <span className="price">{formatPrice(discountedPrice * quantity)}</span>
              <span className="unit"> 원</span>
            </div>
            <div className="point-guide">
              <span className="point">적립</span>
              <span className="guide">
                구매 시 {formatPrice(Math.ceil(itemData.price * userMileageClass * quantity))}원
                적립
              </span>
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
