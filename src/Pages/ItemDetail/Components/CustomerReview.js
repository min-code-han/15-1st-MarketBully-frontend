import React, { Component } from "react";
import ItemDetailMenu from "./ItemDetailMenu";
import "./CustomerReview.scss";

class CustomerReview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="CustomerReview">
        <ItemDetailMenu />
      </div>
    );
  }
}

export default CustomerReview;
