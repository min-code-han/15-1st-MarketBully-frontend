import React, { Component } from "react";
import { Link } from "react-router-dom";
import MDRecommandSlide from "./Slide/MDRecommandSlide";
import "./config/MDRcommandSlide.scss";

class MDRcommand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filtering: [],
      LimmitedData: [],
      mode: false,
      buttonData: [],
      LimmitedName: [],
    };
  }

  componentDidMount = () => {
    fetch("http://10.168.2.67:8000/product/index/md-choice")
      .then(res => res.json())
      .then(res => {
        const limmitedID = res.product_list.filter(e => e.id);
        const LimmitedName = res.product_list.filter(e => e.subcategory_name);
        this.setState({ data: res.product_list, LimmitedData: limmitedID, LimmitedName });
      });
    fetch("http://localhost:3001/data/filterName.json")
      .then(res => res.json())
      .then(res => {
        this.setState({ buttonData: res.data });
      })
      .catch(error => console.log(error.message));
  };
  clickHandler = filterName => {
    const filtering = this.state.data.filter(data => {
      return data.subcategory_name === filterName;
    });
    console.log(filtering, "..........", filterName);
    this.setState({ filtering: filtering, mode: true });
  };

  render() {
    console.log(this.state.LimmitedName);
    return (
      <>
        <div className="mdRcommandContainer">
          <div className="mdRcommandHader">
            <h2>MD의 추천</h2>
          </div>
          <div className="mdRcommandMenu">
            {this.state.buttonData?.map((data, index) => (
              <button
                key={index}
                class="mdRcommandBtn"
                onClick={() => this.clickHandler(data.name)}
              >
                {data.name}
              </button>
            ))}
          </div>
          <div className="RcommandSlideContainer">
            <MDRecommandSlide filtering={this.state.filtering} />
          </div>
        </div>
      </>
    );
  }
}

export default MDRcommand;
