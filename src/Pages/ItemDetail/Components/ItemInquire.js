import React, { Component } from "react";
import ItemDetailMenu from "./ItemDetailMenu";
import "./ItemInquire.scss";

class ItemInquire extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ItemInquire">
        <ItemDetailMenu />
      </div>
    );
  }
}

export default ItemInquire;
