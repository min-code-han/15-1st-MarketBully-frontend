import React, { Component } from "react";
import ItemListModal from "./ItemListModal";
import ItemCard from "../../Components/ItemCard/ItemCard";
import "./ItemList.scss";

const FILTEROPTIONS = ["추천순", "신상품순", "인기상품순", "낮은 가격순", "높은 가격순"];

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
      categoryTesting: [],
    };
  }

  componentDidMount() {
    // fetch("http://10.168.2.67:8000/product");
    fetch("./data/item.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          // products: res.product_list,
          categoryTesting: res.category,
          products: res.data,
        });
      });
  }

  controlQuantity = e => {
    if (e.target.name === "+") {
      this.setState({ quantities: this.state.quantities + 1 });
    } else {
      this.setState({ quantities: this.state.quantities - 1 });
    }
  };

  changingFilteringOption = e => {
    const { products } = this.state;

    if (e.target.id === "낮은 가격순") {
      products.sort(function (a, b) {
        return a.price - (a.price * a.sale) / 100 - b.price + b.price * (b.sale / 100);
      });
    } else if (e.target.id === "높은 가격순") {
      products.sort(function (a, b) {
        return -a.price + (a.price * a.sale) / 100 + b.price - b.price * (b.sale / 100);
      });
    }

    this.setState({ filteringOption: e.target.id });
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
      categoryTesting,
    } = this.state;

    return (
      <div className="ItemList">
        <ItemListModal
          name={clickedID && products.find(el => el.id === +clickedID).name}
          price={clickedID && products.find(el => el.id === +clickedID).price}
          clickedID={clickedID}
          isModalBoxOnOrOff={isModalBoxOn}
          ModalBoxClose={this.showModalBox}
          quantities={quantities}
          controlQuantity={this.controlQuantity}
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
              <li>전체보기</li>
              {categoryTesting.map(el => {
                return <li>{el.meat}</li>;
              })}
            </ul>
            <div className="selectOptions" onClick={this.showOptionBox}>
              <span className={optionBoxOnAndOff ? "selectedOption" : ""}>{filteringOption}</span>
              <i class="fas fa-chevron-down" />
              <ul className={optionBoxOnAndOff ? "optionList" : "optionListNone"}>
                {FILTEROPTIONS.map(el => {
                  return (
                    <li id={el} onClick={this.changingFilteringOption}>
                      {el}
                    </li>
                  );
                })}
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
                  // sale={el.discount_percentage}
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
