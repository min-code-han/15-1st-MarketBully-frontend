import React, { Component } from "react";
import "./RelatedProduct.scss";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
class RelatedProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="RelatedProduct">
        <div className="design-block"></div>
        <h1>RELATED PRODUCT</h1>
        <ul className="related-items">
          {arr.map((elem, index) => {
            return (
              <li className="card" key={index}>
                <img src="images/tomato.jpg" alt="tomato" />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default RelatedProduct;
