/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import ItemDetailMenu from "./ItemDetailMenu";
import "./ItemDescription.scss";

class ItemDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="ItemDescription">
        <ItemDetailMenu menuTabId={1} />
        <main>
          <img src="images/tomato.jpg" alt="tomato" />
          <h2>탐스러운 붉은빛은 가진</h2>
          <h1>무농약 토마토</h1>
          <hr className="solid" />
          <p className="item-description">
            먹기 좋게 잘라 본연의 맛 그대로 즐기기도 하고, 으깨어 끓여 파스타 소스로 만들어 먹기도
            하고, 갈아서 주스로 마시기도 하죠. 토마토의 선명한 붉은 색은 라이코펜이라는 영양소
            때문인데, ‘라이코펜’은 베타카로틴, 루테인과 함께 과일과 채소에 색깔을 입히는 3대
            영양소인데요. 토마토는 라이코펜 덩어리라고 해도 과언이 아니죠. 어떻게 먹든 껍질째 먹게
            되는 채소이니 건강하게 무농약으로 드시는 것이 좋겠죠?
          </p>
          <div className="bully-check-point"></div>
          <div className="bully-tip"></div>
        </main>
      </section>
    );
  }
}

export default ItemDescription;
