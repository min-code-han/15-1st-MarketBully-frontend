import React, { Component } from "react";
import "./ItemListModal.scss";

class ItemListModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantitiesForBack: this.props.quantities,
    };
  }

  addQuantity = () => {
    this.setState({ quantitiesForBack: this.state.quantities + 1 }, () => {});
  };

  subtractQuantity = () => {
    const { quantitiesForBack } = this.state;
    if (quantitiesForBack < 1) return;
    this.setState({ quantitiesForBack: this.state.quantities - 1 });
  };

  sendInfoToCart = () => {
    this.state.quantities !== 0 &&
      fetch("http://10.168.1.160:8000/order/cart", {
        method: "POST",
        body: JSON.stringify({
          product_id: this.props.clickedID,
          quantity: this.state.quantities,
        }),
      });
  };

  render() {
    const {
      name,
      price,
      quantities,
      isModalBoxOnOrOff,
      ModalBoxClose,
      controlQuantity,
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
                    <i className="fas fa-times" />
                  </div>
                </header>
                <section className="product-name">{name}</section>
                <ul className="product-name-and-price-and-quantities">
                  <li>
                    <span>{name}</span>
                    <div className="price-and-quantities">
                      <div className="price">{Math.floor(price)}원</div>
                      <div className="button-container">
                        <button name="-" className="subtract" onClick={controlQuantity}>
                          -
                        </button>
                        <input value={quantities}></input>
                        <button name="+" className="add" onClick={controlQuantity}>
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
                  <button className="cancel" onClick={ModalBoxClose}>
                    취소
                  </button>
                  <div onClick={ModalBoxClose}>
                    <button className="cart" onClick={this.sendInfoToCart}>
                      장바구니 담기
                    </button>
                  </div>
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
