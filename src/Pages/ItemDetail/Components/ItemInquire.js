import React, { Component } from "react";
import Board from "./Board";

class ItemInquire extends Component {
  render() {
    return (
      <div className="ItemInquire">
        <Board paramsid={this.props.paramsid} menuTabId={this.props.menuTabId} showLike={false} />
      </div>
    );
  }
}

export default ItemInquire;
