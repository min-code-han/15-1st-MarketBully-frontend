import React, { Component } from "react";
import { Link } from "react-router-dom";
import ItemListModal from "./ItemListModal";
import "./ItemList.scss";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionBoxOnAndOff: false,
      isModalBoxOn: false,
    };
  }

  showOptionBox = e => {
    this.setState({
      optionBoxOnAndOff: !this.state.optionBoxOnAndOff,
    });
  };

  showModalBox = e => {
    this.setState({
      isModalBoxOn: !this.state.isModalBoxOn,
    });
  };

  render() {
    const { optionBoxOnAndOff, isModalBoxOn } = this.state;
    return (
      <div className="ItemList">
        <ItemListModal isModalBoxOnOrOff={isModalBoxOn} ModalBoxClose={this.showModalBox} />
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
              <span className={optionBoxOnAndOff ? "selectedOption" : ""}>추천 순</span>
              <i class="fas fa-chevron-down" />
              <ul className={optionBoxOnAndOff ? "optionList" : "optionListNone"}>
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
            <div className="img-container">
              <img src="/images/park.jpg" alt="샘플사진"></img>
              <button className="cart" onClick={this.showModalBox}>
                <i class="fas fa-shopping-cart "></i>
              </button>
            </div>
            <div className="header">[토토미] 우리쌀 닭강정</div>
            <div className="price">129,800원</div>
            <div className="description">달콤짭조름한 매력의 닭강정</div>
          </li>
          <li className="card">
            <div className="img-container">
              <img src="/images/park.jpg" alt="샘플사진"></img>
              <button className="cart">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
            <div className="header">[토토미] 우리쌀 닭강정</div>
            <div className="price">129,800원</div>
            <div className="description">달콤짭조름한 매력의 닭강정</div>
          </li>
          <li className="card">
            <div className="img-container">
              <img src="/images/park.jpg" alt="샘플사진"></img>
              <button className="cart">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
            <div className="header">[토토미] 우리쌀 닭강정</div>
            <div className="price">129,800원</div>
            <div className="description">달콤짭조름한 매력의 닭강정</div>
          </li>
          <li className="card">
            <div className="img-container">
              <img src="/images/park.jpg" alt="샘플사진"></img>
              <button className="cart">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
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
