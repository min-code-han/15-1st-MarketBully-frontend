import React, { Component } from "react";
import "./ItemCartCard";

class ItemCartCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;
    return (
      <li key={item.id}>
        <i className={`fa-check-circle ${item ? "far" : "fas purple"}`} onClick={() => {}} />
        <img src={item.img_url} alt="tomato" />
        <h2 className="item-name">{item.name}</h2>
        <div className="item-counter">
          <button>-</button>
          <input value="1" readOnly></input>
          <button>+</button>
        </div>
        <div className="price-box">
          <div className="price">{item.salePrice}원</div>
          <div className="price-without-sale">{item.originPrice}원</div>
        </div>
        <img className="delete" src="images/cancel.svg" alt="delete" />
      </li>
    );
  }
}

export default ItemCartCard;
