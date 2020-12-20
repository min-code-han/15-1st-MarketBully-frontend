import React, { Component } from "react";
import "./ItemListModal.scss";

class ItemListModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addQuantity = () => {
    this.setState({ quantities: this.state.quantities + 1 });
  };

  subtractQuantity = () => {
    if (this.state.quantities < 1) return;
    this.setState({ quantities: this.state.quantities - 1 });
  };

  render() {
    const {
      name,
      price,
      quantities,
      isModalBoxOnOrOff,
      ModalBoxClose,
      addQuantity,
      subtractQuantity,
    } = this.props;

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
                      <div className="price">{Math.floor(price)}원</div>
                      <div className="button-container">
                        <button className="subtract" onClick={subtractQuantity}>
                          -
                        </button>
                        <input value={quantities}></input>
                        <button className="add" onClick={addQuantity}>
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="total-wording-and-price">
                  <div className="wording">합계</div>
                  <div className="price">{price * quantities}원</div>
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
