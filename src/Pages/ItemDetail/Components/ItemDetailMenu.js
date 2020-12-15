import React, { Component } from "react";
import "./ItemDetailMenu.scss";

class ItemDetailMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { menuTabId, reviewNum, InquireNum } = this.props;
    return (
      <ul className="ItemDetailMenu">
        <li className={`${menuTabId === 1 ? "select" : ""}`}>상품설명</li>
        <li className={`${menuTabId === 2 ? "select" : ""}`}>상품이미지</li>
        <li className={`${menuTabId === 3 ? "select" : ""}`}>상세정보</li>
        <li className={`${menuTabId === 4 ? "select" : ""}`}>{`고객후기 (${reviewNum || "0"})`}</li>
        <li className={`${menuTabId === 5 ? "select" : ""}`}>{`상품문의 (${
          InquireNum || "0"
        })`}</li>
      </ul>
    );
  }
}

export default ItemDetailMenu;
