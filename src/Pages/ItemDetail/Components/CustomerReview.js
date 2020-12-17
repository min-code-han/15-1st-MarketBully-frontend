import React, { Component } from "react";
import Board from "./Board";
import "./CustomerReview.scss";

class CustomerReview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="CustomerReview">
        <Board name={this.props.name} />
      </div>
    );
  }
}

export default CustomerReview;
