/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { scroller } from "react-scroll";
import InfoAndCartPut from "./Components/InfoAndCartPut";
import RelatedProduct from "./Components/RelatedProduct";
import ItemDescription from "./Components/ItemDescription";
import ItemImage from "./Components/ItemImage";
import DetailInfo from "./Components/DetailInfo";
import CustomerReview from "./Components/CustomerReview";
import ItemInquire from "./Components/ItemInquire";
import ItemDetailMenu from "./Components/ItemDetailMenu";
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

const MENU_COMPONENTS = {
  1: ItemDescription,
  2: ItemImage,
  3: DetailInfo,
  4: CustomerReview,
  5: ItemInquire,
};
const MENU_NAME = ["ItemDescription", "ItemImage", "DetailInfo", "CustomerReview", "ItemInquire"];
class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refPosition: 1,
    };
  }

  changePosition = id => {
    console.log(id);
    this.setState({ refPosition: id });
    console.log(MENU_NAME[id - 1]);

    scroller.scrollTo(MENU_NAME[id - 1], {
      duration: 500,
      smooth: true,
    });
  };
  render() {
    return (
      <div className="ItemDetail">
        <div className="main-width">
          <InfoAndCartPut itemData={itemData} />
          <RelatedProduct />
          {MENU_NAME.map((name, idx) => {
            const ComponentName = MENU_COMPONENTS[idx + 1];
            return (
              <div name={name} key={name}>
                <ItemDetailMenu menuTabId={idx + 1} changePosition={this.changePosition} />
                <ComponentName />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ItemDetail;
