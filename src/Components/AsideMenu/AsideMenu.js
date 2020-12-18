import React, { Component } from "react";
import "./AsideMenu.scss";

class AsideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <aside className="AsideMenu">
        <div className="dawn-delivery">
          <p>샛별·택배</p>
          <p className="delivery">배송안내</p>
        </div>
        <div className="menu">
          <ul>
            <li>등급별 혜택</li>
            <li>레시피</li>
            <li>베스트 후기</li>
          </ul>
        </div>
        <div className="recently-seen-item">
          <h2>최근 본 상품</h2>
          <div className="recent-items">
            <img src="images/tomato.jpg" alt="tomato"></img>
            <img src="images/tomato.jpg" alt="tomato"></img>
            <img src="images/tomato.jpg" alt="tomato"></img>
            <img src="images/tomato.jpg" alt="tomato"></img>
          </div>
        </div>
      </aside>
    );
  }
}
export default AsideMenu;
