import React, { Component } from "react";
import ItemDetailMenu from "./ItemDetailMenu";
import "./ItemImage.scss";

class ItemImage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ItemImage">
        <ItemDetailMenu />
      </div>
    );
  }
}

export default ItemImage;
