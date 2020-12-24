import React, { Component } from "react";
import FirstMDRecommand from "./MDRecommand/FirstMDRecommand";
import SecondMDRecommand from "./MDRecommand/SecondMDRecommand";
import ThirdMDRecommand from "./MDRecommand/ThirdMDRecommand";
import FourMDRecommand from "./MDRecommand/FourMDRecommand";
import FiveMDRecommand from "./MDRecommand/FiveMDRecommand";
import SixMDRecommand from "./MDRecommand/SixMDRecommand";
import InitialMDRecomman from "./MDRecommand/InitialMDRecomman";
import "./config/MDRcommandSlide.scss";

class MDRecommand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 1,
      data: [],
      LimmitedID: [],
      LimmitedName: [],
      mode: false,
    };
  }
  clickHandler = currentId => {
    this.setState({ currentId });
  };

  componentDidMount = () => {
    fetch("http://192.168.43.34:8000/product/md-choice")
      .then(res => res.json())
      .then(res => {
        if (res.message) {
          const LimmitedID = res.product_list.filter(e => e.id);
          const LimmitedName = res.product_list.filter(e => e.subcategory_name);
          this.setState({
            data: res.product_list,
            LimmitedID,
            LimmitedName,
          });
        }
      });
  };
  clickHandler = (currentId, name) => {
    this.setState({ currentId });
    const filtering = this.state.data.filter(data => {
      return data.subcategory_name.includes(name);
    });

    this.setState({ filtering: filtering, mode: true });
  };

  render() {
    const CATEGORY_Slide = [
      "돼지고기",
      "소고기",
      "양고기",
      "계란류",
      "닭, 오리고기",
      "양념육, 돈까스",
    ];
    const MAPPING_Slide = {
      1: <FirstMDRecommand filtering={this.state.filtering} />,
      2: <SecondMDRecommand filtering={this.state.filtering} />,
      3: <ThirdMDRecommand filtering={this.state.filtering} />,
      4: <FourMDRecommand filtering={this.state.filtering} />,
      5: <FiveMDRecommand filtering={this.state.filtering} />,
      6: <SixMDRecommand filtering={this.state.filtering} />,
    };

    const { currentId } = this.state;
    return (
      <div className="mdRcommandContainer">
        <div className="mdRcommandHader">
          <h2>MD의 추천</h2>
        </div>
        <div className="mdRcommandMenu">
          {CATEGORY_Slide?.map((data, index) => (
            <button
              key={index}
              class="mdRcommandBtn"
              onClick={() => this.clickHandler(index + 1, data)}
            >
              {data}
            </button>
          ))}{" "}
        </div>
        {this.state.mode ? (
          <div className="RcommandSlideContainer">{MAPPING_Slide[currentId]} </div>
        ) : (
          <div className="RcommandSlideContainer">
            {" "}
            <InitialMDRecomman data={this.state.data} />{" "}
          </div>
        )}
      </div>
    );
  }
}

export default MDRecommand;
