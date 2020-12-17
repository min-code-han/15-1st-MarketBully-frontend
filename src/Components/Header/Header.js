import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import ItemCard from "../ItemCard/ItemCard";

class Header extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      fix: false,
      hoverAction: false,
      subHoverAction: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnMount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = e => {
    const scrollTop = ("scroll", window.scrollY);
    if (scrollTop > 160) {
      this.setState({ fix: true });
    } else {
      this.setState({ fix: false });
    }
  };

  onMouseOver = e => {
    if (e.target.className === "gnbAllCategory") {
      this.setState({
        hoverAction: !this.state.hoverAction,
      });
    }
    if (e.target.className === "gnbOverlay") {
      this.setState({
        hoverAction: false,
        subHoverAction: false,
      });
    }
  };
  subMenuMoues = () => {
    this.setState({
      subHoverAction: !this.state.subHoverAction,
    });
  };

  render() {
    return (
      <>
        <div
          className={`${this.state.hoverAction ? "gnbOverlay" : ""}`}
          onClick={this.onMouseOver}
        ></div>

        <div className="header">
          <ul className="headerMenu">
            <li>
              <Link to="/">회원가입</Link>
            </li>
            <li>
              <Link to="/">로그인</Link>
            </li>
            <li>
              <Link to="/"> 고객센터</Link>
            </li>
            <li>
              <Link to="/">배송지역 검색</Link>
            </li>
          </ul>

          <div className="header__logo">
            <img src="https://res.kurly.com/pc/service/common/1908/delivery_190819.gif"></img>
            <img src="./images/marketbully.jpg"></img>
          </div>
          <div className={`gnb ${this.state.fix ? "fix" : ""}`}>
            <ul>
              <li onClick={this.onMouseOver}>
                <Link className="gnbAllCategory" to="/">
                  전체 카테고리
                </Link>
              </li>
              <li>
                <Link to="/">신상품</Link>
              </li>
              <li>
                <Link to="/">베스트</Link>
              </li>
              <li>
                <Link to="/">알뜰쇼핑</Link>
              </li>
              <li>
                <Link to="/">이벤트</Link>
              </li>
            </ul>

            <div className="gnb__search">
              <input />
            </div>
            <div className="gnb__cart">
              <img src="https://res.kurly.com/pc/ico/1908/ico_cart_x2_v2.png"></img>
            </div>
            <div className={`gnbInnerBox ${this.state.subHoverAction ? "hoverd" : ""}`}>
              <ul>
                <li>
                  <Link to="/">
                    {" "}
                    <img
                      src="https://img-cf.kurly.com/shop/data/category/icon_yearend_inactive_pc@2x.1606988604.png"
                      alt="연말대전"
                    ></img>
                    Link1
                  </Link>
                </li>
              </ul>
            </div>
            <div className={`gnb__subMenu ${this.state.hoverAction ? "hoverd" : ""}`}>
              <ul>
                <li onClick={this.subMenuMoues}>
                  <div className="gnb__subMenuBox">
                    <Link to="/">
                      {" "}
                      <div className="gnb__image">
                        <img
                          src="https://img-cf.kurly.com/shop/data/category/icon_yearend_inactive_pc@2x.1606988604.png"
                          alt="연말대전"
                        ></img>
                      </div>
                      <div className="gnbSubMenuText">
                        <span> Link1 </span>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="gnb__subMenuBox">
                    <Link to="/">
                      {" "}
                      <img
                        src="https://img-cf.kurly.com/shop/data/category/icon_yearend_inactive_pc@2x.1606988604.png"
                        alt="연말대전"
                      ></img>
                      Link1
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="gnb__subMenuBox">
                    <Link to="/">
                      {" "}
                      <img
                        src="https://img-cf.kurly.com/shop/data/category/icon_yearend_inactive_pc@2x.1606988604.png"
                        alt="연말대전"
                      ></img>
                      Link1
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="gnb__subMenuBox">
                    <Link to="/">
                      {" "}
                      <img
                        src="https://img-cf.kurly.com/shop/data/category/icon_yearend_inactive_pc@2x.1606988604.png"
                        alt="연말대전"
                      ></img>
                      Link1
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="gnb__subMenuBox">
                    <Link to="/">
                      {" "}
                      <img
                        src="https://img-cf.kurly.com/shop/data/category/icon_yearend_inactive_pc@2x.1606988604.png"
                        alt="연말대전"
                      ></img>
                      Link1
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="gnb__subMenuBox">
                    <Link to="/">
                      {" "}
                      <img
                        src="https://img-cf.kurly.com/shop/data/category/icon_yearend_inactive_pc@2x.1606988604.png"
                        alt="연말대전"
                      ></img>
                      Link1
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="gnb__subMenuBox">
                    <Link to="/">
                      {" "}
                      <img
                        src="https://img-cf.kurly.com/shop/data/category/icon_yearend_inactive_pc@2x.1606988604.png"
                        alt="연말대전"
                      ></img>
                      Link1
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="gnb__subMenuBox">
                    <Link to="/">
                      {" "}
                      <img
                        src="https://img-cf.kurly.com/shop/data/category/icon_yearend_inactive_pc@2x.1606988604.png"
                        alt="연말대전"
                      ></img>
                      Link1
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="gnb__subMenuBox">
                    <Link to="/">
                      {" "}
                      <img
                        src="https://img-cf.kurly.com/shop/data/category/icon_yearend_inactive_pc@2x.1606988604.png"
                        alt="연말대전"
                      ></img>
                      Link1
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="gnb__subMenuBox">
                    <Link to="/">
                      {" "}
                      <img
                        src="https://img-cf.kurly.com/shop/data/category/icon_yearend_inactive_pc@2x.1606988604.png"
                        alt="연말대전"
                      ></img>
                      Link1
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="gnb__subMenuBox">
                    <Link to="/">
                      {" "}
                      <img
                        src="https://img-cf.kurly.com/shop/data/category/icon_yearend_inactive_pc@2x.1606988604.png"
                        alt="연말대전"
                      ></img>
                      Link1
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="gnb__subMenuBox">
                    <Link to="/">
                      {" "}
                      <img
                        src="https://img-cf.kurly.com/shop/data/category/icon_yearend_inactive_pc@2x.1606988604.png"
                        alt="연말대전"
                      ></img>
                      Link1
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="gnb__subMenuBox">
                    <Link to="/">
                      {" "}
                      <img
                        src="https://img-cf.kurly.com/shop/data/category/icon_yearend_inactive_pc@2x.1606988604.png"
                        alt="연말대전"
                      ></img>
                      Link1
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
