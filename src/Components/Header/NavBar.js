import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Four from "./Four";
import Five from "./Five";
import Six from "./Six";
import "./NavBar.scss";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryAll: [],
      categoriesName: [],
      fix: false,
      currentID: 1,

      //   subcategory: [],
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
    };
  }

  componentDidMount = () => {
    fetch("http://10.168.2.67:8000/product/category")
      .then(res => res.json())
      .then(res => {
        if (res.message) {
          console.log(res.categories);
          this.setState({
            categoryAll: res.categories,
          });
        }
      });
    window.addEventListener("scroll", this.handleScroll);
  };
  componentWillUnMount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = e => {
    const scrollTop = ("scroll", window.scrollY);
    this.setState({ fix: scrollTop > 160 ? true : false });
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
  gotoCart = () => {
    this.props.history.push("/ItemCart");
  };

  render() {
    const { categoryAll } = this.state;

    const MAPPING_OBJ = {
      1: <First categoryAll={categoryAll[0]} />,
      2: <Second categoryAll={categoryAll[1]} />,
      3: <Third categoryAll={categoryAll[2]} />,
      4: <Four AllRemove={this.props.AllRemove} categoryAll={categoryAll[3]} />,
      5: <Five categoryAll={categoryAll[4]} />,
      6: <Six categoryAll={categoryAll[5]} />,
    };
    const CATEGORY_ARR = [
      "fas fa-air-freshener",
      "fab fa-android",
      "fab fa-android",
      "fab fa-android",
      "fas fa-bomb", // 연말
      "fas fa-apple-alt", //채소
      "fas fa-lemon", //과일,견과
      "fas fa-fish", //수산
      "fas fa-egg", //정육 , 계란
      "fas fa-concierge-bell", //국 반찬
      "fas fa-leaf", // 샐러드;
      "fas fa-bomb", // 연말
      "fas fa-apple-alt", //채소
      "fas fa-lemon", //과일,견과
      "fas fa-fish", //수산
      "fas fa-egg", //정육 , 계란
      "fas fa-concierge-bell", //국 반찬
      "fas fa-leaf", // 샐러드;
    ];
    return (
      <div className={`gnb ${this.state.fix ? "fix" : ""}`}>
        <ul>
          <li onClick={this.props.hadleClick}>
            <Link className="gnbAllCategory">전체 카테고리</Link>
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
        <div className="gnb__cart" onClick={this.gotoCart}>
          <img src="https://res.kurly.com/pc/ico/1908/ico_cart_x2_v2.png"></img>
        </div>

        {/* Sub Inner Box */}
        <div className={`gnbInnerBox ${this.props.subHoverAction ? "hoverd" : ""}`}>
          {MAPPING_OBJ[this.props.currentID]}
        </div>
        {/* Sub Box */}
        <div className={`gnb__subMenu ${this.props.hoverAction ? "hoverd" : ""}`}>
          <ul>
            {categoryAll.map((categoryAll, index) => {
              return (
                <li onMouseOver={() => this.props.subMenuMoues(index + 1)} key={categoryAll.id}>
                  <div
                    className="gnb__subMenuBox"
                    onMouseOver={() => this.props.subMenuClickItem(categoryAll.id)}
                  >
                    <Link to="/">
                      {" "}
                      <i className={`${CATEGORY_ARR[index]}`}></i>
                      <div className="gnbSubMenuText">
                        <span> {categoryAll.name} </span>
                      </div>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
