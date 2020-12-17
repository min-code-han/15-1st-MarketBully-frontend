/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import "./ItemDetailMenu.scss";

class ItemDetailMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClickMenuTab = e => {
    this.props.changePosition(e.target.id);
  };

  render() {
    const { menuTabId, reviewNum, InquireNum } = this.props;
    return (
      <ul className="ItemDetailMenu">
        <li id={1} className={`${menuTabId === 1 ? "select" : ""}`} onClick={this.onClickMenuTab}>
          상품설명
        </li>
        <li id={2} className={`${menuTabId === 2 ? "select" : ""}`} onClick={this.onClickMenuTab}>
          상품이미지
        </li>
        <li id={3} className={`${menuTabId === 3 ? "select" : ""}`} onClick={this.onClickMenuTab}>
          상세정보
        </li>
        <li
          id={4}
          className={`${menuTabId === 4 ? "select" : ""}`}
          onClick={this.onClickMenuTab}
        >{`고객후기 (${reviewNum || "0"})`}</li>
        <li
          id={5}
          className={`${menuTabId === 5 ? "select" : ""}`}
          onClick={this.onClickMenuTab}
        >{`상품문의 (${InquireNum || "0"})`}</li>
      </ul>
    );
  }
}

export default ItemDetailMenu;
