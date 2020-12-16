/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import "./ItemCart.scss";

class ItemCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectAll: false,
      selectList: [false, false, false, false],
    };
  }
  render() {
    const { selectAll, selectList } = this.state;
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
                    {selectList.map((item, idx) => {
                      return (
                        <li key={idx}>
                          <i
                            className={`fa-check-circle ${item ? "far" : "fas purple"}`}
                            onClick={() => {
                              this.setState({
                                selectList: selectList.map((elem, index) => {
                                  return index === idx ? !elem : elem;
                                }),
                              });
                            }}
                          />
                          <img src="images/tomato2.jpg" alt="tomato" />
                          <h2 className="item-name">[Bully's] 신선한 토마토 1kg</h2>
                          <div className="item-counter">
                            <button>-</button>
                            <input value="1" readOnly></input>
                            <button>+</button>
                          </div>
                          <div className="price-box">
                            <div className="price">9,810원</div>
                            <div className="price-without-sale"></div>
                          </div>
                          <i className="fas fa-times" />
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
                  <i class="fas fa-map-marker-alt" /> 배송지
                </h2>
                <div className="full-address">경기도 수원시 팔달구 매산로 2가 마켓불리 1311호</div>
                <div className="delivery-type">샛별배송</div>
                <button>배송지 변경</button>
              </div>
              <div className="price-result">
                <table>
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
                    <th></th>
                    <td className="free-deliver-guide">20,000원 추가주문 시, 무료배송</td>
                  </tr>
                  <tr className="final-price">
                    <th className="final-price">결제예정금액</th>
                    <td className="final-price">23,000원</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td className="point-guide">구매 시 94원 적립</td>
                  </tr>
                </table>
                <div className="pre-price"></div>
                <div className="total-sale-amount"></div>
                <div className="delivery-fee"></div>
                <div className="free-delivery-guide"></div>
                <div className="final-price"></div>
                <div className="point-guide"></div>
              </div>
              <button>주문하기</button>
              <p className="notice">
                <ul>
                  <li>· 쿠폰/적립금은 주문서에서 사용 가능합니다.</li>
                  <li>· '입금확인' 상태일 때는 직접 주문취소가 가능합니다.</li>
                  <li>· '입금확인' 이후 상태에는 고객센터로 문의해주세요.</li>
                </ul>
              </p>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default ItemCart;
