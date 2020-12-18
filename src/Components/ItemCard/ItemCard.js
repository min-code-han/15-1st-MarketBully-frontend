import React, { Component } from "react";
import "./ItemCard.scss";

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, price, imgUrl, sale, shortDescription, showModalBoxButton, type } = this.props;

    return (
      <div className={`ItemCard ${type}`}>
        <div className="ItemCardContainer">
          <img src={imgUrl} alt="제품의 이미지" />
          {(type === "ItemList" || type === "main") && sale && (
            <div className="saleBox">Save {sale}%</div>
          )}
          {type === "ItemList" && (
            <button className="cart" onClick={showModalBoxButton}>
              <i class="fas fa-shopping-cart "></i>
            </button>
          )}
          <div className="header">{name}</div>
          {type === "main" && sale ? (
            <>
              <div className="price">{price - price * (sale / 100)}</div>
              <div className="originalPrice">{price}</div>
            </>
          ) : type === "ItemList" && sale ? (
            <div className="priceBox">
              <span className="originalPrice">{price}</span>
              <span className="price"> -> {price - price * (sale / 100)}원</span>
            </div>
          ) : (
            <div className="priceBox">
              <div className="price">{price}원</div>
            </div>
          )}
          {type === "ItemList" && <div className="description">{shortDescription}</div>}
        </div>
      </div>
    );
  }
}

export default ItemCard;

{
  /* How to Use 
1. import ItemCard Component from Upper Component

2. Give Keys and Values that you need in ItemCard Component 
  <ItemCard
  name={el.name} //상품 이름
  price={el.price} //상품 가격
  imgUrl={el.imgUrl} //상품 이미지 Url
  sale={el.sale} // 상품 세일 여부
  showModalBoxButton={this.showModalBox} // 모달 박스 구현 
  type={"ItemList"} // 본인이 하는 페이지, 여기에서 페이지 이름만 바꾸면 사용가능
/>; 
*/
}
