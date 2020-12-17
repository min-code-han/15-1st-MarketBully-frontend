import React, { Component } from "react";
import "./ItemListModal.scss";

class ItemListModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantities: 0,
    };
  }

  addQuantity = e => {
    this.setState({ quantities: this.state.quantities + 1 });
  };

  subtractQuantity = e => {
    if (this.state.quantities < 1) return;
    this.setState({ quantities: this.state.quantities - 1 });
  };

  render() {
    const { name, price, isModalBoxOnOrOff, ModalBoxClose } = this.props;
    const { quantities } = this.state;
    return (
      <>
        {isModalBoxOnOrOff && (
          <div className="ItemListModal">
            <div className="ItemListModalBox">
              <div className="content-container">
                <header>
                  <div>상품 선택</div>
                  <div onClick={ModalBoxClose}>
                    <i class="fas fa-times" />
                  </div>
                </header>
                <section className="product-name">{name}</section>
                <ul className="product-name-and-price-and-quantities">
                  <li>
                    <span>{name}</span>
                    <div className="price-and-quantities">
                      <div className="price">{price}</div>
                      <div className="button-container">
                        <button className="subtract" onClick={this.subtractQuantity}>
                          -
                        </button>
                        <input value={quantities}></input>
                        <button className="add" onClick={this.addQuantity}>
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="total-wording-and-price">
                  <div className="wording">합계</div>
                  <div className="price">3,500원</div>
                </div>
                <div className="cancel-and-cart-buttons">
                  <button className="cancel">취소</button>
                  <button className="cart">장바구니 담기</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ItemListModal;
