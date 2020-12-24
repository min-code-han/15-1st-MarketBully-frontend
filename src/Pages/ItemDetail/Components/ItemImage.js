import React, { Component } from "react";
import "./Style/ItemImage.scss";

class ItemImage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { product_image_url, name } = this.props.itemData;
    return (
      <div className="ItemImage">
        <img src={product_image_url} alt={name} />
        <p className="simple-description">{name}</p>
      </div>
    );
  }
}

export default ItemImage;
