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
    this.state = {};
  }

  changePosition = id => {
    scroller.scrollTo(MENU_NAME[id - 1], {
      duration: 500,
      smooth: true,
    });
  };
  render() {
    return (
      <div className="ItemDetail">
        <div className="main-width">
          <InfoAndCartPut />
          <RelatedProduct />
          {MENU_NAME.map((name, idx) => {
            const ComponentName = MENU_COMPONENTS[idx + 1];
            return (
              <div name={name} key={name}>
                <ItemDetailMenu menuTabId={idx + 1} changePosition={this.changePosition} />
                <ComponentName menuTabId={idx + 1} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ItemDetail;
