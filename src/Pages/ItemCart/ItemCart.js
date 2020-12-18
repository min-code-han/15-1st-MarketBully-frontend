/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import "./ItemCart.scss";

class ItemCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: [],
      cartRealData: [],
      selectAll: false,
      showRoomItems: false,
      showColdItems: false,
      showFrozenItems: false,
    };
  }
  clickShowButton = e => {
    const { id } = e.target;
    this.setState({ [id]: !this.state[id] });
  };

  getCartData = async () => {
    const response = await fetch(`data/cartdata.json`);
    const data = await response.json();
    this.setState({ cartData: data.cartData });
  };
  getData = async () => {
    // 2020.12.18 오후 3시 20분, 마켓컬리 백엔드와 프론트의 역사적인 만남이 이루어진 코드
    // 역사적인 첫 API 주소: http://10.168.1.160:8000/order/cart
    const response = await fetch(`http://10.168.1.160:8000/order/cart`);
    const data = await response.json();
    console.log(data.items_in_cart);
    this.setState({ cartRealData: data.items_in_cart });
  };
  componentDidMount() {
    this.getCartData();
    this.getData();
  }
  render() {
    const {
      cartRealData,
      cartData,
      selectAll,
      showRoomItems,
      showColdItems,
      showFrozenItems,
    } = this.state;

    return (
      <div className="ItemCart">
        <main>
          <h1 className="title">장바구니</h1>
          <section className="cart-container">
            <div className="cart-box">
              <div className="top-select-box">
                <i
                  className={`fa-check-circle ${selectAll ? "far" : "fas purple"}`}
                  onClick={() => {
                    this.setState({ selectAll: !selectAll });
                  }}
                />
                <button>전체선택</button>
                <button>선택삭제</button>
              </div>
              <div className="cart">
                <div className="items-in-cart">
                  <ul>
                    <li className="frozen">
                      <div>
                        <img alt="snowflake" src="images/frozen.svg" />
                        <h2>냉동 상품</h2>
                      </div>
                      <i
                        id="showFrozenItems"
                        onClick={this.clickShowButton}
                        className={`fas fa-chevron-${showFrozenItems ? "down" : "up"}`}
                      />
                    </li>
                    {cartRealData.map((item, id) => {
                      return (
                        <li key={item.id} className={`${showFrozenItems ? "hide" : ""}`}>
                          <i
                            className={`fa-check-circle ${item ? "far" : "fas purple"}`}
                            onClick={() => {}}
                          />
                          <img src={item.image_url} alt={item.name} />
                          <h2 className="item-name">{item.name}</h2>
                          <div className="item-counter">
                            <button>-</button>
                            <input value={`${item.quantity}`} readOnly></input>
                            <button>+</button>
                          </div>
                          <div className="price-box">
                            <div className="price">
                              {/* 할인 후 10원 이하 절삭 */}
                              {Math.floor((item.price * (1 - item.discount_rate)) / 10) * 10}원
                            </div>
                            <div className="price-without-sale">{+item.price}원</div>
                          </div>
                          <img className="delete" src="images/cancel.svg" alt="delete" />
                        </li>
                      );
                    })}
                    <li className="cold">
                      <div>
                        <img alt="water drop" src="images/cold.svg" />
                        <h2>냉장 상품</h2>
                      </div>
                      <i
                        id="showColdItems"
                        onClick={this.clickShowButton}
                        className={`fas fa-chevron-${showColdItems ? "down" : "up"}`}
                      />
                    </li>
                    {cartData.map((item, id) => {
                      return (
                        <li key={item.id} className={`${showColdItems ? "hide" : ""}`}>
                          <i
                            className={`fa-check-circle ${item ? "far" : "fas purple"}`}
                            onClick={() => {}}
                          />
                          <img src={item.imgUrl} alt="tomato" />
                          <h2 className="item-name">{item.name}</h2>
                          <div className="item-counter">
                            <button>-</button>
                            <input value="1" readOnly></input>
                            <button>+</button>
                          </div>
                          <div className="price-box">
                            <div className="price">{item.salePrice}원</div>
                            <div className="price-without-sale">{item.originPrice}원</div>
                          </div>
                          <img className="delete" src="images/cancel.svg" alt="delete" />
                        </li>
                      );
                    })}
                    <li className="room">
                      <div>
                        <img alt="sun" src="images/room.svg" />
                        <h2>상온 상품</h2>
                      </div>
                      <i
                        id="showRoomItems"
                        onClick={this.clickShowButton}
                        className={`fas fa-chevron-${showRoomItems ? "down" : "up"}`}
                      />
                    </li>
                    {cartData.map((item, id) => {
                      return (
                        <li key={item.id} className={`${showRoomItems ? "hide" : ""}`}>
                          <i
                            className={`fa-check-circle ${item ? "far" : "fas purple"}`}
                            onClick={() => {}}
                          />
                          <img src={item.imgUrl} alt="tomato" />
                          <h2 className="item-name">{item.name}</h2>
                          <div className="item-counter">
                            <button>-</button>
                            <input value="1" readOnly></input>
                            <button>+</button>
                          </div>
                          <div className="price-box">
                            <div className="price">{item.salePrice}원</div>
                            <div className="price-without-sale">{item.originPrice}원</div>
                          </div>
                          <img className="delete" src="images/cancel.svg" alt="delete" />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="bottom-select-box">
                <i
                  className={`fa-check-circle ${selectAll ? "far" : "fas purple"}`}
                  onClick={() => {
                    this.setState({ selectAll: !selectAll });
                  }}
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
                <div className="pre-price"></div>
                <div className="total-sale-amount"></div>
                <div className="delivery-fee"></div>
                <div className="free-delivery-guide"></div>
                <div className="final-price"></div>
                <div className="point-guide"></div>
              </div>
              <button>주문하기</button>

              <ul className="notice">
                <li>· 쿠폰/적립금은 주문서에서 사용 가능합니다.</li>
                <li>· '입금확인' 상태일 때는 직접 주문취소가 가능합니다.</li>
                <li>· '입금확인' 이후 상태에는 고객센터로 문의해주세요.</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default ItemCart;
