/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import InfoAndCartPut from "./Components/InfoAndCartPut";
import RelatedProduct from "./Components/RelatedProduct";
import ItemDescription from "./Components/ItemDescription";
import ItemImage from "./Components/ItemImage";
import DetailInfo from "./Components/DetailInfo";
import Board from "../../Components/Board/Board";
import "./ItemDetail.scss";

const itemData = {
  id: 1,
  name: "무농약 토마토",
  shortDescription: "친환경으로 재배한 신선한 무농약 토마토",
  price: 1590,
  sellUnit: "1개",
  weight: "1kg",
  deliveryType: "샛별배송/택배배송",
  originCountry: "국산",
  packageType: "냉장/종이포장",
  allergyInfo: ["소고기 함유", "본 제품은 돼지고기를 사용한 제품과 같은 제조시설에서 제조"],
  shelfLif: "수령일 포함 4일 이상 남은 상품을 보내드립니다.",
};
class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ItemDetail">
        <div className="main-width">
          <InfoAndCartPut itemData={itemData} />
          <RelatedProduct />
          <ItemDescription />
          <ItemImage />
          <DetailInfo />
          <Board menuTabId={4} />
          <Board menuTabId={5} />
        </div>
      </div>
    );
  }
}

export default ItemDetail;
