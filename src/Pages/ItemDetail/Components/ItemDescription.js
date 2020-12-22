/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import "./Style/ItemDescription.scss";

class ItemDescription extends Component {
  render() {
    const { name, description_image_url, content, subtitle } = this.props.itemData;
    return (
      <section className="ItemDescription">
        <main>
          <img src={description_image_url} alt={name} />
          <h2>{subtitle}</h2>
          <h1>{name}</h1>
          <hr />
          <p className="item-description">{content}</p>
          <div className="bully-check-point">
            <h1>Bully's Check Point</h1>
            <div>
              <hr />
              <h2>
                재료와 성분<span>Ingredients</span>
              </h2>
              <ul>
                <li>마켓불리는 무항생제와 동물복지만을 고집합니다.</li>
                <li>친환경(무농약, 유기농) 제품을 우선합니다.</li>
              </ul>
              <h2>
                생산 유통 과정<span>Process</span>
              </h2>
              <ul>
                <li>HACCP 인증 시설에서 도축 및 가공</li>
                <li>산소충진포장(MAP)으로 신선함 유지</li>
                <li>마켓 불리가 직접 유통 과정에 참여</li>
              </ul>
              <h2>
                브랜드와 생산자<span>Brand & Artisan</span>
              </h2>
              <ul>
                <li>마켓불리로부터 인증받은 브랜드만 입점</li>
                <li>안전한 식품을 위해 생산자와 직접 면담</li>
                <li>생산자와의 지속적 접촉 및 관리</li>
              </ul>
            </div>
          </div>
        </main>
      </section>
    );
  }
}

export default ItemDescription;
