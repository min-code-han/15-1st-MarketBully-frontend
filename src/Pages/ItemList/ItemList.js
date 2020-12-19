import React, { Component } from "react";
import { Link } from "react-router-dom";
import ItemListModal from "./ItemListModal";
import ItemCard from "../../Components/ItemCard/ItemCard";
import "./ItemList.scss";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionBoxOnAndOff: false,
      isModalBoxOn: false,
      products: [],
      clickedID: null,
      quantities: 0,
      filteringOption: "추천순",
    };
  }

  componentDidMount() {
    // fetch("http://10.168.1.160:8000/order/cart")
    fetch("./data/item.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          // products: res.items_in_cart,
          products: res.data,
        });
      });
  }

  addQuantity = () => {
    this.setState({ quantities: this.state.quantities + 1 });
  };

  subtractQuantity = () => {
    if (this.state.quantities < 1) return;
    this.setState({ quantities: this.state.quantities - 1 });
  };

  changingFilteringOption = e => {
    const { products, filteringOption } = this.state;

    this.setState({ filteringOption: e.target.id });

    if (filteringOption === "높은 가격순")
      products.sort(function (a, b) {
        return a.price - (a.price * a.sale) / 100 - b.price + b.price * (b.sale / 100);
      });
  };

  showOptionBox = () => {
    this.setState({
      optionBoxOnAndOff: !this.state.optionBoxOnAndOff,
    });
  };

  showModalBox = e => {
    const { isModalBoxOn } = this.state;
    this.setState({
      isModalBoxOn: !isModalBoxOn,
      clickedID: isModalBoxOn ? null : e.target.id,
      quantities: 0,
    });
  };

  render() {
    const {
      clickedID,
      optionBoxOnAndOff,
      isModalBoxOn,
      products,
      quantities,
      filteringOption,
    } = this.state;

    return (
      <div className="ItemList">
        <ItemListModal
          name={clickedID && products.find(el => el.id === +clickedID).name}
          price={clickedID && products.find(el => el.id === +clickedID).price}
          isModalBoxOnOrOff={isModalBoxOn}
          ModalBoxClose={this.showModalBox}
          quantities={quantities}
          addQuantity={this.addQuantity}
          subtractQuantity={this.subtractQuantity}
        />
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
              <span className={optionBoxOnAndOff ? "selectedOption" : ""}>{filteringOption}</span>
              <i class="fas fa-chevron-down" />
              <ul className={optionBoxOnAndOff ? "optionList" : "optionListNone"}>
                <li id={`추천순`} onClick={this.changingFilteringOption}>
                  추천순
                </li>
                <li id={`신상품순`} onClick={this.changingFilteringOption}>
                  신상품순
                </li>
                <li id={`인기상품순`} onClick={this.changingFilteringOption}>
                  인기상품순
                </li>
                <li id={`낮은 가격순`} onClick={this.changingFilteringOption}>
                  낮은 가격순
                </li>
                <li id={`높은 가격순`} onClick={this.changingFilteringOption}>
                  높은 가격순
                </li>
              </ul>
            </div>
          </div>
        </header>
        <ul className="cardContainer">
          {products.map(el => {
            return (
              <li className="card">
                <ItemCard
                  id={el.id}
                  name={el.name}
                  price={el.price}
                  imgUrl={el.imgUrl}
                  sale={el.sale}
                  // imgUrl={el.image_url}
                  // sale={el.discount_rate}
                  shortDescription={el.shortDescription}
                  showModalBoxButton={this.showModalBox}
                  type={"ItemList"}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ItemList;
