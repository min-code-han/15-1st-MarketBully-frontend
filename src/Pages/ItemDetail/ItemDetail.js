import React, { Component } from "react";
import InfoAndCartPut from "./Components/InfoAndCartPut";
import RelatedProduct from "./Components/RelatedProduct";
import ItemDescription from "./Components/ItemDescription";
import ItemImage from "./Components/ItemImage";
import DetailInfo from "./Components/DetailInfo";
import Board from "../../Components/Board/Board";
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
          <Board menuTabId={4} />
          <Board menuTabId={5} />
        </div>
      </div>
    );
  }
}

export default ItemDetail;
