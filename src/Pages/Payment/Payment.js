import React, { Component } from "react";
import { fetchWithTimeout } from "../../utils";
import "./Payment.scss";

const FREE_DELIVERY_THRESHOLD = 40000;
const DELIVERY_FEE = 3000;
const MILEAGE_PERCENTAGE = 0.005;
class Payment extends Component {
  state = {
    cartData: [],
    payType: "",
    agreeTerms: false,
  };

  itemPrice = ({ price, discount_rate, quantity }) => {
    return Math.floor((price * (1 - discount_rate)) / 10) * 10 * quantity;
  };

  priceEach = ({ price, discount_rate }) => {
    return Math.floor((price * (1 - discount_rate)) / 10) * 10;
  };

  getPayType = e => {
    this.setState({ payType: e.target.id });
  };

  toggleAgree = e => {
    this.setState({ agreeTerms: !this.state.agreeTerms });
  };

  goPay = () => {
    alert("결제가 완료되었습니다!");
    this.props.history.push("/Home");
  };

  getData = async () => {
    try {
      const response = await fetchWithTimeout("http://10.168.2.97:8000/order/cart", {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      const selectedItems = data.items_in_cart.filter(item => item.selected);

      !selectedItems[0] && alert("빈 장바구니로 결제할 수 없습니다.");

      data.MESSAGE === "SUCCESS"
        ? this.setState({ cartData: selectedItems })
        : alert("장바구니 불러오기 실패!");
    } catch {
      const response = await fetch("/data/cartdata.json");
      const data = await response.json();
      const selectedItems = data.items_in_cart.filter(item => item.selected);

      this.setState({ cartData: selectedItems });
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { cartData, payType, agreeTerms } = this.state;
    const { priceEach, itemPrice, getPayType, toggleAgree, goPay } = this;
    const totalPrice = Math.floor(
      cartData.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
    const discountedTotalPrice = Math.floor(
      cartData.reduce((acc, item) => acc + itemPrice(item), 0)
    );
    const freeDelivery = discountedTotalPrice > FREE_DELIVERY_THRESHOLD;

    return (
      <div className="Payment">
        <main>
          <div className="title">
            <h1>주문서</h1>
            <h2>주문하실 상품명 및 수량을 정확하게 확인해 주세요</h2>
          </div>
          <section className="payment">
            <h1>상품 정보</h1>
            <table className="cart">
              <thead>
                <tr>
                  <th className="image">상품</th>
                  <th className="item-info">상품 정보</th>
                  <th className="price">상품 금액</th>
                </tr>
              </thead>
              <tbody>
                {cartData.map(item => {
                  return (
                    <tr key={item.id}>
                      <td className="image">
                        <img alt={item.name} src={item.image_url} />
                      </td>
                      <td className="item-info">
                        <span className="name">{item.name}</span>
                        <span>{`${item.quantity}개 / 개 당 ${priceEach(
                          item
                        ).toLocaleString()}원`}</span>
                      </td>
                      <td className="price">
                        <span>{`${itemPrice(item).toLocaleString()} 원`}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h1>주문자 정보</h1>
            <table className="orderer-info">
              <tbody>
                <tr>
                  <th>보내는 분</th>
                  <td>이장현</td>
                </tr>
                <tr>
                  <th>휴대폰</th>
                  <td>010 - 1234 - 1234</td>
                </tr>
                <tr>
                  <th>이메일</th>
                  <td>janghyeon300@gmail.com</td>
                </tr>
                <tr>
                  <th></th>
                  <td className="email-guide">이메일을 통해 주문처리과정을 받아볼 수 있습니다.</td>
                </tr>
              </tbody>
            </table>
            <h1>배송 정보</h1>
            <table className="delivery-info">
              <tbody>
                <tr>
                  <th>배송지</th>
                  <td>
                    <span className="delivery-type">샛별배송</span>
                    <h3>{"경기 수원시 팔달구 매산로2가 마켓불리 1103호"}</h3>
                    <h4>{"이장현, 010-1234-1234"}</h4>
                    <button>변경</button>
                  </td>
                </tr>
                <tr>
                  <th className="place">받으실 장소</th>
                  <td>
                    <h3>{"문앞"}</h3>
                    <h4>{"출입방법"}</h4>
                    <button>변경</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="pay-core">
              <div className="left">
                <h1>쿠폰 / 적립금</h1>
                <table>
                  <tbody>
                    <tr>
                      <th>쿠폰 적용</th>
                      <td>
                        <select>
                          <option>{"적용할 쿠폰을 선택해 주세요"}</option>
                        </select>
                        <span>(보유쿠폰: 0개)</span>
                        <span className="guide">쿠폰사용문의(카카오톡)</span>
                      </td>
                    </tr>
                    <tr>
                      <th>적립금 적용</th>
                      <td>
                        <div className="mileage">
                          <input className="mileage" placeholder="0" />원<input type="checkbox" />
                          <span>모두 사용</span>
                        </div>
                        <span>보유적립금: {"0원"}</span>
                        <span className="guide">{"적립금 내역 확인: 마이컬리 > 적립금"}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h1>결제 수단</h1>
                <table className="pay-method">
                  <tbody>
                    <tr>
                      <th>일반 결제</th>
                      <td>
                        <input type="radio" name="payType" id="normal" onClick={getPayType} />
                        <span>신용카드</span>
                      </td>
                    </tr>
                    <tr>
                      <th>토스</th>
                      <td>
                        <input type="radio" name="payType" id="toss" onClick={getPayType} />
                        <span>toss</span>
                      </td>
                    </tr>
                    <tr>
                      <th>네이버페이</th>
                      <td>
                        <input type="radio" name="payType" id="naverPay" onClick={getPayType} />
                        <span>NAVER Pay</span>
                      </td>
                    </tr>
                    <tr>
                      <th>PAYCO 결제</th>
                      <td>
                        <input type="radio" name="payType" id="payco" onClick={getPayType} />
                        <span>Payco</span>
                      </td>
                    </tr>
                    <tr>
                      <th>휴대폰 결제</th>
                      <td>
                        <input type="radio" name="payType" id="phone" onClick={getPayType} />
                        <span>휴대폰</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="right">
                <div className="sticky-receipt">
                  <h1 className="receipt-title">결제 금액</h1>
                  <div className="final-receipt">
                    <table>
                      <tbody>
                        <tr>
                          <th>상품금액</th>
                          <td>{`${totalPrice.toLocaleString()} 원`}</td>
                        </tr>
                        <tr>
                          <th>상품할인금액</th>
                          <td>{`- ${(totalPrice - discountedTotalPrice).toLocaleString()} 원`}</td>
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
                            <span className="mileage-box">적립</span>
                            {`구매 시 ${Math.floor(
                              discountedTotalPrice * MILEAGE_PERCENTAGE
                            ).toLocaleString()} 원 적립 (${MILEAGE_PERCENTAGE * 100}%)`}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <h1>개인정보 수집/제공</h1>
            <div className="personal-info">
              <div className="checkbox">
                <input type="checkbox" onClick={toggleAgree} />
              </div>
              <div className="guide">
                <span>결제 진행 필수 동의</span>
                <span className="check">
                  개인정보 수집 이용 및 위탁 동의(필수) <span>{"약관확인 >"}</span>
                </span>
              </div>
            </div>
            <div className="pay-btn">
              <button
                className={`pay ${payType && agreeTerms && "able"}`}
                disabled={!(agreeTerms && payType)}
                onClick={goPay}
              >
                결제하기
              </button>
              <span>'입금확인' 상태일 때는 주문내역 상세페이지에서 주문 취소가 가능합니다.</span>
              <span>미성년자가 결제 시 법정대리인이 그 거래를 취소할 수 있습니다.</span>
              <span>상품 미배송 시, 셜제수단으로 환불됩니다.</span>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Payment;
