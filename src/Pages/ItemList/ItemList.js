import React, { Component } from "react";
import "./ItemList.scss";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ItemList">
        <header>
          <div className="categoryHeader">
            <span className="meatIcon">
              <i class="fas fa-bacon fa-2x" />
            </span>
            <span className="category">정육 · 계란</span>
          </div>
          <div className="filteringHeader">
            <ul>
              <a href="">
                <li>전체보기 </li>
              </a>
              <a href="">
                <li>소고기 </li>
              </a>
              <a href="">
                <li>돼지·고기 </li>
              </a>
              <a href="">
                <li>계란류 </li>
              </a>
              <a href="">
                <li>닭·오리고기 </li>
              </a>
              <a href="">
                <li>양념육·돈까스 </li>
              </a>
              <a href="">
                <li>양고기 </li>
              </a>
            </ul>
            <div className="selectOptions">
              <span className="option">추천 순</span>
              <i class="fas fa-chevron-down" />
            </div>
          </div>
        </header>
        <ul className="cardContainer">
          <li className="card">
            <img src="/images/samsamsam.jpeg" alt="샘플사진" />
            <div className="header">[토토미] 우리쌀 닭강정</div>
            <div className="price">129,800원</div>
            <div className="description">달콤짭조름한 매력의 닭강정</div>
          </li>
          <li className="card">
            <img src="/images/samsamsam.jpeg" alt="샘플사진" />
            <div className="header">[토토미] 우리쌀 닭강정</div>
            <div className="price">129,800원</div>
            <div className="description">달콤짭조름한 매력의 닭강정</div>
          </li>
          <li className="card">
            <img src="/images/samsamsam.jpeg" alt="샘플사진" />
            <div className="header">[토토미] 우리쌀 닭강정</div>
            <div className="price">129,800원</div>
            <div className="description">달콤짭조름한 매력의 닭강정</div>
          </li>
          <li className="card">
            <img src="/images/samsamsam.jpeg" alt="샘플사진" />
            <div className="header">[토토미] 우리쌀 닭강정</div>
            <div className="price">129,800원</div>
            <div className="description">달콤짭조름한 매력의 닭강정</div>
          </li>
          <li className="card">
            <img src="/images/samsamsam.jpeg" alt="샘플사진" />
            <div className="header">[토토미] 우리쌀 닭강정</div>
            <div className="price">129,800원</div>
            <div className="description">달콤짭조름한 매력의 닭강정</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default ItemList;
