import React, { Component } from "react";
import "./ItemCard.scss";

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, price, imgUrl } = this.props;
    return (
      <div className="ItemCard">
        <img src={imgUrl} alt="제품의 이미지" />
        <div className="header">{name}</div>
        <div className="price">{price}</div>
      </div>
    );
  }
}

export default ItemCard;
