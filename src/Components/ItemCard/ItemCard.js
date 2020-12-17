import React, { Component } from "react";
import "./ItemCard.scss";

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { id, name, price, imgUrl, sale, showModalBoxButton, type } = this.props;

    return (
      <div className={`ItemCard ${type}`}>
        <div className="ItemCardContainer">
          <img src={imgUrl} alt="제품의 이미지" />
          {type === "ItemList" && sale && <div className="saleBox">Save {sale}%</div>}
          {type === "ItemList" && (
            <button className="cart" onClick={showModalBoxButton}>
              <i class="fas fa-shopping-cart "></i>
            </button>
          )}
          <div className="header">{name}</div>
          <div className="price">{price}</div>
        </div>
      </div>
    );
  }
}

export default ItemCard;

{
  /* How to Use 
  <ItemCard
  name={el.name} //상품 이름
  price={el.price} //상품 가격
  imgUrl={el.imgUrl} //상품 이미지 Url
  sale={el.sale} // 상품 세일 여부
  showModalBoxButton={this.showModalBox} // 모달 박스 구현 
  type={"ItemList"} // 본인이 하는 페이지, 여기에서 페이지 이름만 바꾸면 사용가능
/>; 
*/
}
