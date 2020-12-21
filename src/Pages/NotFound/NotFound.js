import React, { Component } from "react";
import "./NotFound.scss";

class NotFound extends Component {
  goToHome = () => {
    this.props.history.push("/Home");
  };
  render() {
    return (
      <div className="NotFound">
        <button onClick={this.goToHome}>Home</button>
        <h1>404 NotFound</h1>
        <h2>잘못된 경로입니다</h2>
      </div>
    );
  }
}

export default NotFound;
