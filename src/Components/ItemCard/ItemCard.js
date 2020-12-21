import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ItemCard.scss";

const CARDTYPE = ["ItemList", "RelatedProduct", "main"];

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToDetail = () => {
    this.props.history.push(`/ItemDetail`);
    // this.props.history.push(`/ItemDetail/${this.props.id}`);
  };

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
          <img src={imgUrl} alt="제품의 이미지" onClick={this.goToDetail} />

          {type !== "RelatedProduct" && sale && <div className="saleBox">Save {sale * 100}%</div>}
          {type === "ItemList" && (
            <button id={id} className="cart" onClick={showModalBoxButton}>
              <i id={id} class="fas fa-shopping-cart " onClick={showModalBoxButton} />
            </button>
          )}
          <div className="headerAndPriceContainer">
            <div className="header" onClick={this.goToDetail}>
              {name}
            </div>
            {type !== "RelatedProduct" ? (
              <div className="priceBox">
                <div className="price">
                  {type === "ItemList" && "→"}
                  {Math.floor(price - price * (sale / 100))}원
                </div>
                <div className="originalPrice">{Math.floor(price)}원</div>
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

export default withRouter(ItemCard);
