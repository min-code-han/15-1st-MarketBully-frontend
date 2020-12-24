/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import CartTitleCard from "./Components/CartTitleCard";
import CartItemCard from "./Components/CartItemCard";
import { CART_API } from "../../config";
import { fetchWithTimeout } from "../../utils";
import "./ItemCart.scss";

const FREE_DELIVERY_THRESHOLD = 40000;
const DELIVERY_FEE = 3000;
const PACKING_TYPE = [
  {
    nameEng: "frozen",
    nameKor: "냉동 상품",
    show: true,
  },
  {
    nameEng: "cold",
    nameKor: "냉장 상품",
    show: true,
  },
  {
    nameEng: "room",
    nameKor: "상온 상품",
    show: true,
  },
];

class ItemCart extends Component {
  state = {
    cartData: [],
    packingType: PACKING_TYPE,
  };

  discountedPrice = ({ price, discount_rate, quantity }) => {
    return Math.floor((price * (1 - discount_rate)) / 10) * 10 * quantity;
  };

  selectAll = () => {
    const { cartData } = this.state;
    cartData.reduce((result, item) => (result = result && item.selected), true)
      ? cartData.map(item => {
          item.selected = false;
          return item;
        })
      : cartData.map(item => {
          item.selected = true;
          return item;
        });
    this.setState({ cartData: cartData });
  };

  selectItem = async e => {
    const id = e.target.id;
    const className = e.target.className;

    const response = await fetch(`http://10.168.2.97:8000${CART_API}`, {
      method: "PATCH",
      body: JSON.stringify({
        cart_item_id: id,
        select: className === "fa-check-circle fas purple" ? "False" : "True",
      }),
    });
    const data = await response.json();
    this.getCartData();
  };

  clickShowButton = e => {
    const { packingType } = this.state;
    const { id } = e.target;
    packingType.map(item => {
      if (item.nameEng === id) item.show = !item.show;
      return item;
    });
    this.setState({ packingType: packingType });
  };

  deleteItem = e => {
    fetch("http://10.168.2.97:8000/order/cart", {
      method: "DELETE",
      body: JSON.stringify({
        cart_item_id: e.target.id,
      }),
    })
      .then(res => res.status)
      .then(status => {
        status === 204 ? this.getCartData() : alert("상품 삭제를 실패하였습니다.");
      });
  };

  deleteSelected = async () => {
    const { cartData } = this.state;
    const itemsToDelete = cartData.filter(item => item.selected);
    const idsToDelete = itemsToDelete.map(item => item.id);
    for (let idx in idsToDelete) {
      const response = await fetch("http://10.168.2.97:8000/order/cart", {
        method: "DELETE",
        body: JSON.stringify({
          cart_item_id: idsToDelete[idx],
        }),
      });
      const status =
        (await response.status) === 204
          ? console.log("삭제 성공")
          : console.log("상품 삭제를 실패하였습니다.");
      await console.log(status);
    }
    const response = await this.getCartData();
    console.log(response);
  };

  addItem = e => {
    fetch("http://10.168.2.97:8000/order/cart", {
      method: "PATCH",
      body: JSON.stringify({
        cart_item_id: e.target.id,
        delta: "plus",
      }),
    })
      .then(res => res.json())
      .then(result => {
        result.MESSAGE === "SUCCESS" ? this.getCartData() : console.log("실패!");
      });
  };

  subtractItem = e => {
    fetch("http://10.168.2.97:8000/order/cart", {
      method: "PATCH",
      body: JSON.stringify({
        cart_item_id: e.target.id,
        delta: "minus",
      }),
    })
      .then(res => res.json())
      .then(result => {
        result.MESSAGE === "SUCCESS" ? this.getCartData() : console.log("실패!");
      });
  };

  updateCartSelection = () => {
    this.state.cartData.forEach(item => {
      !item.selected &&
        fetch(`http://10.168.2.97:8000${CART_API}`, {
          method: "PATCH",
          body: JSON.stringify({
            cart_item_id: item.id,
            select: "False",
          }),
        })
          .then(res => res.json())
          .then(result => console.log(result));
    });
    this.state.cartData.forEach(item => {
      item.selected &&
        fetch(`http://10.168.2.97:8000${CART_API}`, {
          method: "PATCH",
          body: JSON.stringify({
            cart_item_id: item.id,
            select: "True",
          }),
        })
          .then(res => res.json())
          .then(result => console.log(result));
    });
  };

  getCartData = async () => {
    try {
      const response = await fetch(`http://10.168.2.97:8000/order/cart`);
      const data = await response.json();
      this.setState({ cartData: data.items_in_cart });
    } catch {
      const response = await fetch(`data/cartdata.json`);
      const data = await response.json();
      let cartData = data.items_in_cart;
      cartData = cartData.map(data => {
        data.selected = true;
        return data;
      });

      this.setState({ cartData: cartData });
    }
  };

  componentDidMount() {
    this.getCartData();
  }

  clickOrder = () => {
    this.props.history.push("/Payment");
  };

  render() {
    const { cartData, packingType } = this.state;
    const {
      discountedPrice,
      clickOrder,
      selectAll,
      deleteSelected,
      clickShowButton,
      selectItem,
      subtractItem,
      addItem,
      deleteItem,
    } = this;
    const selectedAll = cartData.reduce((result, item) => (result = result && item.selected), true);
    const selectedItems = cartData.filter(item => item.selected);
    const totalPrice = Math.floor(
      selectedItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
    const discountedTotalPrice = Math.floor(
      selectedItems.reduce((acc, item) => acc + discountedPrice(item), 0)
    );
    const freeDelivery = totalPrice - (totalPrice - discountedTotalPrice) > FREE_DELIVERY_THRESHOLD;

    return (
      <main className="ItemCart">
        <div className="main-width">
          <h1 className="title">장바구니</h1>
          <section className="cart-container">
            <div className="cart-box">
              <div className="top-select-box">
                <i
                  className={`fa-check-circle ${selectedAll ? "fas purple" : "far"}`}
                  onClick={selectAll}
                />
                <button onClick={selectAll}>전체선택</button>
                <button onClick={deleteSelected}>선택삭제</button>
              </div>
              <div className="cart">
                <div className="items-in-cart">
                  {packingType.map((type, idx) => {
                    return (
                      <ul key={idx}>
                        <CartTitleCard key={idx} type={type} clickShowButton={clickShowButton} />
                        {cartData.map(item => {
                          return (
                            <CartItemCard
                              key={item.id}
                              type={type}
                              item={item}
                              selectItem={selectItem}
                              subtractItem={subtractItem}
                              addItem={addItem}
                              deleteItem={deleteItem}
                              discountedPrice={discountedPrice}
                            />
                          );
                        })}
                      </ul>
                    );
                  })}
                </div>
              </div>
              <div className="bottom-select-box">
                <i
                  className={`fa-check-circle ${selectedAll ? "fas purple" : "far"}`}
                  onClick={selectAll}
                />
                <button onClick={selectAll}>전체선택</button>
                <button onClick={deleteSelected}>선택삭제</button>
              </div>
            </div>
            <div className="cart-result">
              <div className="address">
                <h2>
                  <i className="fas fa-map-marker-alt" /> 배송지
                </h2>
                <div className="full-address">경기도 수원시 팔달구 매산로 2가 마켓불리 1311호</div>
                <div className="delivery-type">샛별배송</div>
                <button>배송지 변경</button>
              </div>
              <div className="price-result">
                <table>
                  <tbody>
                    <tr>
                      <th>상품금액</th>
                      <td>{totalPrice.toLocaleString()}원</td>
                    </tr>
                    <tr>
                      <th>상품할인금액</th>
                      <td>-{(totalPrice - discountedTotalPrice).toLocaleString()}원</td>
                    </tr>
                    <tr>
                      <th>배송비</th>
                      <td>{freeDelivery ? "0원" : `+${DELIVERY_FEE.toLocaleString()}원`}</td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="free-deliver-guide">
                        {freeDelivery
                          ? "무료 배송"
                          : `${(
                              FREE_DELIVERY_THRESHOLD - discountedTotalPrice
                            ).toLocaleString()}원 추가주문 시, 무료배송`}
                      </td>
                    </tr>
                    <tr className="final-price">
                      <th>결제예정금액</th>
                      <td>
                        {(
                          discountedTotalPrice + (freeDelivery ? 0 : DELIVERY_FEE)
                        ).toLocaleString()}
                        원
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="point-guide">
                        <span className="mileage-box">적립</span>구매 시
                        {Math.floor(discountedTotalPrice * 0.005).toLocaleString()}원 적립
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button onClick={clickOrder}>주문하기</button>

              <ul className="notice">
                <li>· 쿠폰/적립금은 주문서에서 사용 가능합니다.</li>
                <li>· '입금확인' 상태일 때는 직접 주문취소가 가능합니다.</li>
                <li>· '입금확인' 이후 상태에는 고객센터로 문의해주세요.</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default ItemCart;
