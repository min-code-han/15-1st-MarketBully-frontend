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
      <>
        <div className="ItemCard">
          <img src={imgUrl} alt="삼겹살 먹고 싶띠" />

          <div className="header">{name}</div>
          <div className="price">{price}</div>
        </div>
      </>
    );
  }
}

export default ItemCard;

// a 태그는 각자 알아서 걸어야 할듯. 페이지마다 걸리는 게 다르다.
// a 태그 눌러도 색깔 변화나, underline은 안 나오게 scss 조정 해둠.
// 내일 회의에서 얘기해야 할듯
// 다른 사람들은 img, header, price 까지만 필요
// font-family : noto sans , font-size  적용함
