import React, { Component } from "react";

class CartItemCard extends Component {
  render() {
    const {
      type,
      item,
      selectItem,
      addItem,
      subtractItem,
      deleteItem,
      discountedPrice,
    } = this.props;
    return (
      type.show &&
      item.cart_packing_type === type.nameKor && (
        <li className="CartItemCard" key={item.id}>
          <i
            id={item.id}
            className={`fa-check-circle ${item.selected ? "fas purple" : "far"}`}
            onClick={selectItem}
          />
          <img src={item.image_url} alt={item.name} />
          <h2 className="item-name">{item.name}</h2>
          <div className="item-counter">
            <button id={item.id} onClick={subtractItem}>
              -
            </button>
            <input value={`${item.quantity}`} readOnly></input>
            <button id={item.id} onClick={addItem}>
              +
            </button>
          </div>
          <div className="price-box">
            <div className="price">
              {/* 할인 후 10원 이하 절삭 */}
              {discountedPrice(item).toLocaleString()}원
            </div>
            <div className="price-without-sale">
              {(+item.price * item.quantity).toLocaleString()}원
            </div>
          </div>
          <img
            onClick={deleteItem}
            id={item.id}
            className="delete"
            src="images/cancel.svg"
            alt="delete"
          />
        </li>
      )
    );
  }
}

export default CartItemCard;
