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
import {
  ITEM_DETAIL_API,
  RELATED_PRODUCT_API,
  ITEM_DETAIL_MOCK,
  RELATED_PRODUCT_MOCK,
} from "../../config";
import { fetchWithTimeout } from "../../utils";
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
  state = {
    itemData: DATA_ON_LOADING,
    relatedProduct: [],
  };

  scrollToMenu = id => {
    scroller.scrollTo(MENU_NAME[id - 1], {
      duration: 500,
      smooth: true,
    });
  };

  getMockData = async () => {
    const response = await fetch(ITEM_DETAIL_MOCK);
    const result = await response.json();
    this.setState({ itemData: result.itemInfo });
  };

  getItemData = async () => {
    try {
      const id = this.props.match.params?.id;
      const response = await fetch(`${ITEM_DETAIL_API}/${id}`);
      const result = await response.json();
      this.setState({ itemData: result.product_detail });
      this.getRelatedProduct(result.product_detail.subcategory_id);
    } catch {
      this.getMockData();
    }
  };

  getRelatedProduct = async id => {
    try {
      const response = await fetch(`${RELATED_PRODUCT_API}?subcategory=${id}`);
      const data = await response.json();
      this.setState({ relatedProduct: data.product_list });
    } catch {
      const response = await fetch("data/itemdata.json");
      const data = await response.json();

      this.setState({ relatedProduct: data.data });
    }
  };

  componentDidMount() {
    this.getItemData();
    //this.getRelatedProduct();
  }

  componentDidUpdate(prevProps, _) {
    console.log(prevProps.match.params.id);
    console.log(this.props.match.params.id);
    if (prevProps.match.params.id !== this.props.match.params.id) this.getItemData();
  }

  render() {
    const { itemData, relatedProduct } = this.state;
    console.log("채훈 바보");
    return (
      <main className="ItemDetail">
        <div className="main-width">
          <InfoAndCartPut itemData={itemData} />
          <RelatedProduct relatedProduct={relatedProduct} />
          {MENU_NAME.map((name, idx) => {
            const ComponentName = MENU_COMPONENTS[idx + 1];
            return (
              <div name={name} key={name}>
                <ItemDetailMenu menuTabId={idx + 1} scrollToMenu={this.scrollToMenu} />
                <ComponentName menuTabId={idx + 1} itemData={itemData} />
              </div>
            );
          })}
        </div>
      </main>
    );
  }
}

export default ItemDetail;
