import React, { Component } from "react";
import "./ItemCard.scss";

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="ItemCard">
          <img
            src="https://newsimg.hankookilbo.com/cms/articlerelease/2020/06/11/202006111362061920_7.jpg"
            alt="삼겹살 먹고 싶띠"
          />

          <div className="header">[미트클레버] 더건강한 삼겹살 1.3kg (냉동)</div>
          <div className="price">19,900원</div>
          <div className="description">울금과 뽕잎으로 밑간하여 더욱 건강하고 맛있는</div>
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
