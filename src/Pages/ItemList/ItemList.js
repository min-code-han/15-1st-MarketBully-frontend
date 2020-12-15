import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ItemList.scss";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionBoxOnAndOff: false,
    };
  }

  showOptionBox = e => {
    this.setState({
      optionBoxOnAndOff: !this.state.optionBoxOnAndOff,
    });
  };

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
            <ul className="typeOfCategories">
              <li>
                <Link className="meat" to="#">
                  전체보기
                </Link>
              </li>
              <li>
                <Link className="meat" to="#">
                  소고기
                </Link>
              </li>
              <li>
                <Link className="meat" to="#">
                  돼지·고기{" "}
                </Link>
              </li>
              <li>
                <Link className="meat" to="#">
                  계란류{" "}
                </Link>
              </li>
              <li>
                <Link className="meat" to="#">
                  닭·오리고기
                </Link>
              </li>
              <li>
                <Link className="meat" to="#">
                  양념육·돈까스
                </Link>
              </li>
              <li>
                <Link className="meat" to="#">
                  양고기{" "}
                </Link>
              </li>
            </ul>
            <div className="selectOptions" onClick={this.showOptionBox}>
              <span className={this.state.optionBoxOnAndOff ? "selectedOption" : ""}>추천 순</span>
              <i class="fas fa-chevron-down" />
              <ul className={this.state.optionBoxOnAndOff ? "optionList" : "optionListNone"}>
                <li className="option">추천순</li>
                <li className="option">신상품순</li>
                <li className="option">인기상품순</li>
                <li className="option">낮은 가격순</li>
                <li className="option">높은 가격순</li>
              </ul>
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
