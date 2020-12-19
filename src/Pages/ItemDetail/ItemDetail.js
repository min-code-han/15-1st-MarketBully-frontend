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
const DATA_ON_LOADING = {
  id: 1,
  name: "로딩 중",
  subtitle: "로딩 중",
  img_url: "",
  price: 0,
  discount_percentage: 0,
  sellUnit: "",
  weight: "",
  delivery_type: "",
  origin: "",
  packaging_type: "",
  allergy: "",
  expiration_date: "",
  content: "",
};
class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: DATA_ON_LOADING,
    };
  }

  changePosition = id => {
    scroller.scrollTo(MENU_NAME[id - 1], {
      duration: 500,
      smooth: true,
    });
  };

  getItemDetailData = async () => {
    const response = await fetch(`data/itemdetail.json`);
    const result = await response.json();
    this.setState({ itemData: result.itemInfo });
  };

  getData = async () => {
    // 우리팀 두 번째 API + 프론트!
    const response = await fetch("http://10.168.1.121:8000/product/1");
    const result = await response.json();
    this.setState({ ss: result.product_detail });
  };

  componentDidMount() {
    this.getItemDetailData();
    //this.getData();
  }

  render() {
    const { itemData } = this.state;
    console.log(itemData);
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
