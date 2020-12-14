import React, { Component } from "react";
import ItemDetailMenu from "./ItemDetailMenu";
import "./DetailInfo.scss";

class DetailInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="DetailInfo">
        <ItemDetailMenu />
      </div>
    );
  }
}

export default DetailInfo;
