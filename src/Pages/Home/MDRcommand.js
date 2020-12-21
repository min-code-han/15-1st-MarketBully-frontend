import React, { Component } from "react";
import { Link } from "react-router-dom";
import MDRcommandMeatSlide from "./Slide/MDRcommandMeatSlide";
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
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/data.json")
      .then(res => res.json())
      .then(res => {
        const limmitedID = res.data.filter(e => e.id);
        this.setState({ data: res.data, LimmitedData: limmitedID });
      });
    fetch("http://localhost:3000/data/filterName.json")
      .then(res => res.json())
      .then(res => {
        this.setState({ buttonData: res.data });
      })
      .catch(error => console.log(error.message));
  };
  clickHandler = filterName => {
    const filtering = this.state.data.filter(data => {
      return data.filterName === filterName;
    });
    console.log(filtering, "..........", filterName);
    this.setState({ filtering: filtering, mode: true });
  };

  render() {
    console.log(this.state.mode);
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
                onClick={() => this.clickHandler(data.filterName)}
              >
                {data.name}
              </button>
            ))}
          </div>
          <div className="RcommandSlideContainer">
            <MDRcommandMeatSlide
              limmit={this.state.LimmitedData}
              data={this.state.data}
              filtering={this.state.filtering}
              mode={this.state.mode}
            />
          </div>
        </div>
      </>
    );
  }
}

export default MDRcommand;
