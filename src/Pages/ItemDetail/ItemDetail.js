import React, { Component } from "react";
import InfoAndCartPut from "./Components/InfoAndCartPut";
import RelatedProduct from "./Components/RelatedProduct";
import ItemDescription from "./Components/ItemDescription";
import ItemImage from "./Components/ItemImage";
import DetailInfo from "./Components/DetailInfo";
import CustomerReview from "./Components/CustomerReview";
import ItemInquire from "./Components/ItemInquire";
import "./ItemDetail.scss";

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ItemDetail">
        <div className="main-width">
          <InfoAndCartPut />
          <RelatedProduct />
          <ItemDescription />
          <ItemImage />
          <DetailInfo />
          <CustomerReview />
          <ItemInquire />
        </div>
      </div>
    );
  }
}

export default ItemDetail;
