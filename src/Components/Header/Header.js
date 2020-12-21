import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
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
      gnbCategorydata: [
        {
          id: 1,
          content: "신상품",
        },
        {
          id: 2,
          content: "베스트",
        },
        {
          id: 3,
          content: "알뜰쇼핑",
        },
        {
          id: 4,
          content: "이벤트",
        },
      ],
      gnbSubMenudata: [
        {
          id: 1,
          image:
            "https://img-cf.kurly.com/shop/data/category/icon_yearend_inactive_pc@2x.1606988604.png",
          alt: "연말대전",
          text: "연말대전",
        },
        {
          id: 2,
          image:
            "https://img-cf.kurly.com/shop/data/category/icon_yearend_inactive_pc@2x.1606988604.png",
          alt: "연말대전",
          text: "연말대전",
        },
        {
          id: 3,
          image:
            "https://img-cf.kurly.com/shop/data/category/icon_yearend_inactive_pc@2x.1606988604.png",
          alt: "연말대전",
          text: "연말대전",
        },
        {
          id: 4,
          image:
            "https://img-cf.kurly.com/shop/data/category/icon_yearend_inactive_pc@2x.1606988604.png",
          alt: "연말대전",
          text: "연말대전",
        },
      ],
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
    this.setState({ fix: scrollTop > 160 ? true : false });
  };

  hadnleClick = e => {
    if (e.target.className === "gnbAllCategory") {
      this.setState({
        hoverAction: !this.state.hoverAction,
        subHoverAction: false,
      });
    }
    if (e.target.className === "gnbOverlay") {
      console.log("hi");
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
          onClick={this.hadnleClick}
        ></div>

        <div className="header">
          <ul className="headerMenu">
            <li>
              <Link to="/home">회원가입</Link>
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
              <li onClick={this.hadnleClick}>
                <Link className="gnbAllCategory" to="/">
                  전체 카테고리
                </Link>
              </li>

              {this.state.gnbCategorydata.map(data => {
                return (
                  <li key={data.id}>
                    <Link to="/">{data.content}</Link>
                  </li>
                );
              })}
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
                {this.state.gnbSubMenudata.map(data => {
                  return (
                    <li onClick={this.subMenuMoues} key={data.id}>
                      <div className="gnb__subMenuBox">
                        <Link to="/">
                          {" "}
                          <div className="gnb__image">
                            <img src={data.image} alt={data.alt}></img>
                          </div>
                          <div className="gnbSubMenuText">
                            <span> {data.text} </span>
                          </div>
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Header);
