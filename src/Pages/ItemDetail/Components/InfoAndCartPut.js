/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { CART_API } from "../../../config";
import "./Style/InfoAndCartPut.scss";

// key: 백엔드 데이터 키, value: 화면에 보이는 제목
const INFO_TITLE = {
  sellUnit: "판매단위",
  weight: "중량/용량",
  delivery_type: "배송구분",
  origin: "원산지",
  packaging_type: "포장타입",
  expiration_date: "유통기한",
  allergy: "알레르기 정보",
  notice: "안내사항",
};

class InfoAndCartPut extends Component {
  state = {
    quantity: 1,
    itemData: {},
  };

  addToCart = async () => {
    try {
      const { quantity } = this.state;
      const { itemData } = this.props;
      console.log("확인좀", itemData, quantity);
      const response = await fetch(`http://192.168.43.34:8000/order/cart`, {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          product_id: itemData.id,
          quantity: quantity,
        }),
      });
      const result = await response.json();
      alert("장바구니 추가 완료", result.MESSAGE);
    } catch {
      alert("장바구니 추가 실패.");
    }
  };

  handleQuantity = e => {
    const QUANTITY_MIN = 1;
    const currentQuantity = this.state.quantity;
    const type = e.target.className;
    if (currentQuantity <= QUANTITY_MIN && type === "subtract") return;
    this.setState({
      quantity: currentQuantity + (type === "add" ? 1 : -1),
    });
  };

  render() {
    const { quantity } = this.state;
    const { itemData } = this.props;
    const { addToCart, handleQuantity } = this;
    const { price, discount_percentage, image_url, name, subtitle } = this.props.itemData;
    const mileagePercentage = 0.005;

    // 세일 가격에서 10원 이하 절삭
    const discountedPrice = Math.floor((price * (1 - discount_percentage)) / 10) * 10;

    return (
      <section className="InfoAndCartPut">
        <img className="item-image" src={image_url} alt={image_url && name} />
        <div className="item-detail-right">
          <div className="info">
            <div className="name">
              <h1>{name}</h1>
              <span>
                <i className="fas fa-share-alt" />
              </span>
            </div>
            <h3>{subtitle}</h3>
            <div className="price">
              <span className="on-login">회원할인가</span>
              <div className="real-price">
                <span>{discountedPrice.toLocaleString()}</span>
                <div className="unit">원</div>
                <span className="sale-percentage">
                  {discount_percentage !== "0.00" && `${discount_percentage * 100}%`}
                </span>
              </div>
              <span className="nosale-price">
                {discount_percentage !== "0.00" && (
                  <>
                    <span className="price">{(+price).toLocaleString()}원</span>
                    <i className="far fa-question-circle"></i>
                  </>
                )}
              </span>
            </div>
            <div className="point-guide">
              <span className="member-class">일반 0.5%</span>
              <span className="point-save">
                {`개당 ${Math.ceil(discountedPrice * mileagePercentage).toLocaleString()}원 적립`}
              </span>
            </div>
            <ul className="item-info-list">
              {Object.entries(itemData).map(data => {
                if (!Object.keys(INFO_TITLE).includes(data[0])) return null;
                return (
                  <li key={data[0]}>
                    <p className="title">{INFO_TITLE[data[0]]}</p>
                    <p className="content">{data[0] === "weight" ? `${+data[1]}g` : data[1]}</p>
                  </li>
                );
              })}
              <li className="buy-quantity">
                <span className="title">구매수량</span>
                <button className="subtract" onClick={handleQuantity}>
                  -
                </button>
                <input value={quantity} disabled />
                <button className="add" onClick={handleQuantity}>
                  +
                </button>
              </li>
            </ul>
          </div>
          <div className="cart-put">
            <div className="price-box">
              <span className="total">총 상품금액 : </span>
              <span className="price">{(discountedPrice * quantity).toLocaleString()}</span>
              <span className="unit"> 원</span>
            </div>
            <div className="point-guide">
              <span className="point">적립</span>
              <span className="guide">
                {`구매 시 ${Math.ceil(price * mileagePercentage * quantity).toLocaleString()}원
                적립`}
              </span>
            </div>
            <ul className="button-box">
              <li>
                <button className="restock-notify">재입고 알림</button>
              </li>
              <li>
                <button className="alawys-buy">늘 사는 것</button>
              </li>
              <li>
                <button className="put-cart" onClick={addToCart}>
                  장바구니 담기
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default InfoAndCartPut;
