/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import "./Style/ItemDetailMenu.scss";

class ItemDetailMenu extends Component {
  onClickMenuTab = e => {
    this.props.scrollToMenu(e.target.id);
  };

  render() {
    const { menuTabId, reviewNum, InquireNum } = this.props;
    const MENU_NAME = [`상품설명`, `상품이미지`, `상세정보`, `고객후기`, `상품문의`];

    return (
      <ul className="ItemDetailMenu">
        {MENU_NAME.map((menuName, idx) => {
          return (
            <li
              key={idx}
              id={idx + 1}
              className={`${menuTabId === idx + 1 ? "select" : ""}`}
              onClick={this.onClickMenuTab}
            >
              {menuName}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ItemDetailMenu;
