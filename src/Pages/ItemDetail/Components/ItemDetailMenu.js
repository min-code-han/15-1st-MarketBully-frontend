import React, { Component } from "react";
import "./ItemDetailMenu.scss";

class ItemDetailMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className="ItemDetailMenu">
        <li>상품설명</li>
        <li>상품이미지</li>
        <li>상세정보</li>
        <li>고객후기</li>
        <li>상품문의</li>
      </ul>
    );
  }
}

export default ItemDetailMenu;
