import React, { Component } from "react";

class CartTitleCard extends Component {
  render() {
    const { type, clickShowButton } = this.props;
    const { nameEng, nameKor, show } = type;
    return (
      <li className={`CartTitleCard ${type.nameEng}`}>
        <div>
          <img alt={`${nameEng}`} src={`images/${nameEng}.svg`} />
          <h2>{nameKor}</h2>
        </div>
        <i
          id={`${nameEng}`}
          onClick={clickShowButton}
          className={`fas fa-chevron-${show ? "up" : "down"}`}
        />
      </li>
    );
  }
}

export default CartTitleCard;
