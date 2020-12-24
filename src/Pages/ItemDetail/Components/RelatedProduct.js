import React, { Component } from "react";
import ItemCard from "../../../Components/ItemCard/ItemCard";
import "./Style/RelatedProduct.scss";

class RelatedProduct extends Component {
  render() {
    const { relatedProduct } = this.props;
    return (
      <section className="RelatedProduct">
        <div className="design-block" />
        <h1>RELATED PRODUCT</h1>
        <ul className="related-items">
          {relatedProduct.map((item, index) => {
            return (
              <li key={index}>
                <ItemCard
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  imgUrl={item.image_url}
                  type="RelatedProduct"
                />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default RelatedProduct;
