import React, { Component } from "react";
import Board from "./Board";

class CustomerReview extends Component {
  render() {
    return (
      <div className="CustomerReview">
        <Board menuTabId={this.props.menuTabId} showLike={true} />
      </div>
    );
  }
}

export default CustomerReview;
