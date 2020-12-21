import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Header.scss";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import LoginHeader from './LoginHeader'
import ItemCard from "../ItemCard/ItemCard";

class Header extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      fix: false,
      hoverAction: false,
      subHoverAction: false,
      currentID: 1,
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
 

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    // const id = localStorage.getItem('id');
    // id ? this.onLoing() : this.onLogOut() 
 
  }
  componentWillUnMount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = e => {
    const scrollTop = ("scroll", window.scrollY);
    this.setState({ fix: scrollTop > 160 ? true : false });
  };

  hadnleClick = e => {
    console.log(e);
    if (e.target.className === "gnbAllCategory") {
      this.setState({
        hoverAction: !this.state.hoverAction,
        subHoverAction: false,
      });
    }
    if (e.target.className === "gnbOverlay") {
      this.setState({
        hoverAction: false,
        subHoverAction: false,
      });
    }
  };
  subMenuMoues = currentID => {
    this.setState({
      subHoverAction: true,
      currentID,
    });
  };
  subMenuClickItem = id => {
    const filterCatergory = this.state.gnbCategorydata.filter(e => e.id !== id);
    if (filterCatergory) {
      this.setState({
        subHoverAction: !this.state.subHoverAction,
      });
    }
  };

  render() {
  
    return (
      <>
        <div
          className={`${this.state.hoverAction ? "gnbOverlay" : ""}`}
          onClick={this.hadnleClick}
        ></div>

        <div className="header">
        <LoginHeader />

          <div className="header__logo">
            <img src="https://res.kurly.com/pc/service/common/1908/delivery_190819.gif"></img>
            <img src="./images/marketbully.jpg"></img>
          </div>
          <div className={`gnb ${this.state.fix ? "fix" : ""}`}>
            <ul>
              <li onMouseOver={this.hadnleClick}>
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

            {/* Sub Inner Box */}
            <div className={`gnbInnerBox ${this.state.subHoverAction ? "hoverd" : ""}`}>
              {MAPPING_OBJ[this.state.currentID]}
            </div>
            {/* Sub Box */}
            <div className={`gnb__subMenu ${this.state.hoverAction ? "hoverd" : ""}`}>
              <ul>
                {this.state.gnbSubMenudata.map((data, index) => {
                  return (
                    <li onMouseOver={() => this.subMenuMoues(index + 1)} key={data.id}>
                      <div
                        className="gnb__subMenuBox"
                        onMouseOver={() => this.subMenuClickItem(data.id)}
                      >
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

const MAPPING_OBJ = {
  1: <First />,
  2: <Second />,
  3: <Third />,
};
const CATEGORY_ARR = ["Frist", "Second", "Third"];

export default withRouter(Header);
