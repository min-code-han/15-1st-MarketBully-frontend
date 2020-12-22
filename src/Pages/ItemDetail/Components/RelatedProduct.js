import React, { Component } from "react";
import { RELATED_PRODUCT_MOCK } from "../../../config";
import "./RelatedProduct.scss";

class RelatedProduct extends Component {
  render() {
    const { relatedProduct } = this.props;
    return (
      <div className="RelatedProduct">
        <div className="design-block"></div>
        <h1>RELATED PRODUCT</h1>
        <ul className="related-items">
          {relatedProduct.map((item, index) => {
            return (
              <li className="card" key={index}>
                <img src={item.imgUrl} alt="tomato" />
                <p>{item.name}</p>
                <p>{`${item.sale ? item.price * item.sale * 0.01 : item.price} 원`}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default RelatedProduct;
