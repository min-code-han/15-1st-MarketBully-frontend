/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import "./ItemCart.scss";

class ItemCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: [],
      packingType: [
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
      ],
    };
  }

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

  selectItem = e => {
    const { cartData } = this.state;
    const id = e.target.id;
    cartData.map(item => {
      if (+id === item.id) item.selected = !item.selected;
      return item;
    });
    this.setState({ cartData: cartData });
  };

  clickShowButton = e => {
    const { packingType } = this.state;
    const { id } = e.target;
    console.log(id);
    packingType.map(item => {
      if (item.nameEng === id) item.show = !item.show;
      return item;
    });
    console.log(packingType);
    this.setState({ [id]: !this.state[id] });
    this.setState({ packingType: packingType });
  };

  deleteItem = e => {
    fetch("http://10.168.1.160:8000/order/cart", {
      method: "DELETE",
      body: JSON.stringify({
        cart_item_id: e.target.id,
      }),
    })
      .then(res => res.status)
      .then(status => {
        status === 204 ? this.getData() : alert("상품 삭제를 실패하였습니다.");
      });
  };

  addItem = e => {
    fetch("http://10.168.1.160:8000/order/cart", {
      method: "PATCH",
      body: JSON.stringify({
        cart_item_id: e.target.id,
        delta: "plus",
      }),
    })
      .then(res => res.json())
      .then(result => {
        result.MESSAGE === "SUCCESS" ? this.getData() : console.log("실패!");
      });
  };

  subtractItem = e => {
    fetch("http://10.168.1.160:8000/order/cart", {
      method: "PATCH",
      body: JSON.stringify({
        cart_item_id: e.target.id,
        delta: "minus",
      }),
    })
      .then(res => res.json())
      .then(result => {
        result.MESSAGE === "SUCCESS" ? this.getData() : console.log("실패!");
      });
  };

  // 아직 사용하지 말것!!
  testFunction = e => {
    fetch("http://10.168.1.160:8000/order/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: "7",
        quantity: "2",
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.getData();
      });
  };

  getCartData = async () => {
    const response = await fetch(`data/cartdata.json`);
    const data = await response.json();
    this.setState({ cartData: data.items_in_cart });
  };

  getData = async () => {
    // 2020.12.18 오후 3시 20분, 마켓컬리 백엔드와 프론트의 역사적인 만남이 이루어진 코드
    // 역사적인 첫 API 주소: http://10.168.1.160:8000/order/cart
    const response = await fetch(`http://10.168.1.160:8000/order/cart`);
    const data = await response.json();
    this.setState({ cartData: data.items_in_cart });
  };

  componentDidMount() {
    // getCartData()는 mockData사용하는 코드
    this.getCartData();
    // 실제 서버 통신시 사용할 get은 아래에!
    // this.getData();
  }

  render() {
    const { cartData, packingType } = this.state;
    const selectedAll = cartData.reduce((result, item) => (result = result && item.selected), true);
    return (
      <main className="ItemCart">
        <div className="main-width">
          <h1 className="title">장바구니</h1>
          <section className="cart-container">
            <div className="cart-box">
              <div className="top-select-box">
                <i
                  className={`fa-check-circle ${selectedAll ? "fas purple" : "far"}`}
                  onClick={this.selectAll}
                />
                <button>전체선택</button>
                <button>선택삭제</button>
              </div>
              <div className="cart">
                <div className="items-in-cart">
                  {packingType.map((type, idx) => {
                    return (
                      <ul key={idx}>
                        <li className={`${type.nameEng}`}>
                          <div>
                            <img alt={`${type.nameEng}`} src={`images/${type.nameEng}.svg`} />
                            <h2>{type.nameKor}</h2>
                          </div>
                          <i
                            id={`${type.nameEng}`}
                            onClick={this.clickShowButton}
                            className={`fas fa-chevron-${type.show ? "up" : "down"}`}
                          />
                        </li>
                        {cartData.map(item => {
                          return (
                            type.show &&
                            item.cart_packing_type === type.nameKor && (
                              <li key={item.id}>
                                <i
                                  id={item.id}
                                  className={`fa-check-circle ${
                                    item.selected ? "fas purple" : "far"
                                  }`}
                                  onClick={this.selectItem}
                                />
                                <img src={item.image_url} alt={item.name} />
                                <h2 className="item-name">{item.name}</h2>
                                <div className="item-counter">
                                  <button id={item.id} onClick={this.subtractItem}>
                                    -
                                  </button>
                                  <input value={`${item.quantity}`} readOnly></input>
                                  <button id={item.id} onClick={this.addItem}>
                                    +
                                  </button>
                                </div>
                                <div className="price-box">
                                  <div className="price">
                                    {/* 할인 후 10원 이하 절삭 */}
                                    {Math.floor((item.price * (1 - item.discount_rate)) / 10) *
                                      10 *
                                      item.quantity}
                                    원
                                  </div>
                                  <div className="price-without-sale">{+item.price}원</div>
                                </div>
                                <img
                                  onClick={this.deleteItem}
                                  id={item.id}
                                  className="delete"
                                  src="images/cancel.svg"
                                  alt="delete"
                                />
                              </li>
                            )
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
                  onClick={this.selectAll}
                />
                <button>전체선택</button>
                <button>선택삭제</button>
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
                      <td>29,800원</td>
                    </tr>
                    <tr>
                      <th>상품할인금액</th>
                      <td>-9,800원</td>
                    </tr>
                    <tr>
                      <th>배송비</th>
                      <td>+3,000원</td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="free-deliver-guide">
                        20,000원 추가주문 시, 무료배송
                      </td>
                    </tr>
                    <tr className="final-price">
                      <th className="final-price">결제예정금액</th>
                      <td className="final-price">23,000원</td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="point-guide">
                        <span className="small-yellow-box">적립</span>구매 시 94원 적립
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* 장바구니에 상품 추가 버튼으로 임시 활용중인 버튼 */}
              <button onClick={this.testFunction}>주문하기</button>

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
