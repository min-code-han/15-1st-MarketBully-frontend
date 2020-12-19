import React, { Component } from "react";

class CartTitleCard extends Component {
  render() {
    const { type, clickShowButton } = this.props;
    return (
      <li className={`CartTitleCard ${type.nameEng}`}>
        <div>
          <img alt={`${type.nameEng}`} src={`images/${type.nameEng}.svg`} />
          <h2>{type.nameKor}</h2>
        </div>
        <i
          id={`${type.nameEng}`}
          onClick={clickShowButton}
          className={`fas fa-chevron-${type.show ? "up" : "down"}`}
        />
      </li>
    );
  }
}

export default CartTitleCard;
