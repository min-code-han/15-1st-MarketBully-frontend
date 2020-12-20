import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ItemCard.scss";

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      id,
      name,
      price,
      imgUrl,
      sale,
      shortDescription,
      showModalBoxButton,
      type,
    } = this.props;
    return (
      <div className={`ItemCard ${type}`}>
        <div className="ItemCardContainer">
          <img src={imgUrl} alt="제품의 이미지" />

          {(type === "ItemList" || type === "main") && sale && (
            <div className="saleBox">Save {sale * 100}%</div>
          )}
          {type === "ItemList" && (
            <button id={id} className="cart" onClick={showModalBoxButton}>
              <i id={id} class="fas fa-shopping-cart " onClick={showModalBoxButton} />
            </button>
          )}
          <div className="headerAndPriceContainer">
            <div className="header">{name}</div>
            {type === "main" && sale ? (
              <>
                <div className="price">{price - price * sale}</div>
                <div className="originalPrice">{price}</div>
              </>
            ) : type === "ItemList" && sale ? (
              <div className="priceBox">
                <span className="originalPrice">{Math.floor(price)}원</span>
                <span className="price"> ㅡ> {Math.floor(price - price * (sale / 100))}원</span>
              </div>
            ) : (
              <div className="priceBox">
                <div className="price">{Math.floor(price)}원</div>
              </div>
            )}
          </div>
          {type === "ItemList" && <div className="description">{shortDescription}</div>}
        </div>
      </div>
    );
  }
}

export default ItemCard;
