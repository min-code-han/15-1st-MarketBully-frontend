import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import NotLoginHeader from "./NotLoginHeader";
import LoginHeader from "./LoginHeader";
import NavBar from "./NavBar";
import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      isLogined: false,
      userInfo: "",
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
    };
  }

  handleLoginChanged = () => {
    if (localStorage.getItem("token")) {
      this.setState({ isLogined: true });
      return;
    } else {
      this.setState({ isLogined: false });
    }
  };

  componentDidMount() {
    if (localStorage.getItem("token")) {
      console.log("hi");
      this.setState({ isLogined: true });
      return;
    } else {
      this.setState({ isLogined: false });
    }
    console.log(localStorage.getItem("token"));
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnMount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  componentDidUpdate(prePros, preveState) {
    console.log("props : ", prePros, "prevState :", preveState);
    if (this.state.isLogined === false) {
      if (localStorage.getItem("token")) {
        console.log("hi");
        this.setState({ isLogined: true });

        return;
      }
    }
  }

  AllRemove = () => {
    this.setState({
      hoverAction: false,
      subHoverAction: false,
    });
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

  hadleClick = () => {
    this.setState({
      hoverAction: !this.state.hoverAction,
      subHoverAction: false,
    });
  };
  gotoMain = () => {
    this.props.history.push("/Home");
  };
  render() {
    console.log("state : ", this.state);
    const { isLogined } = this.state;
    return (
      <>
        <div
          className={`${this.state.hoverAction ? "gnbOverlay" : ""}`}
          onClick={this.hadleClick}
        ></div>
        <div className="header">
          {isLogined ? (
            <LoginHeader handleLoginChanged={this.handleLoginChanged} />
          ) : (
            <NotLoginHeader
              hoverAction={this.state.hoverAction}
              subHoverActio={this.state.subHoverAction}
            />
          )}
          <div className="header__logo">
            <img src="https://res.kurly.com/pc/service/common/1908/delivery_190819.gif"></img>
            <img src="./images/marketbully.jpg" onClick={this.gotoMain}></img>
          </div>

          <NavBar
            AllRemove={this.AllRemove}
            currentID={this.state.currentID}
            subMenuClickItem={this.subMenuClickItem}
            subMenuMoues={this.subMenuMoues}
            hadleClick={this.hadleClick}
            hoverAction={this.state.hoverAction}
            subHoverAction={this.state.subHoverAction}
          />
        </div>
      </>
    );
  }
}

export default withRouter(Header);
