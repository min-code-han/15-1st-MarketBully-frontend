import React, { Component } from "react";
import "./RelatedProduct.scss";

class RelatedProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProduct: [],
    };
  }

  componentDidMount() {
    fetch("data/itemdata.json")
      .then(res => res.json())
      .then(res => this.setState({ relatedProduct: res.data }));
  }

  render() {
    const { relatedProduct } = this.state;
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
