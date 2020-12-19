import React, { Component } from "react";
import { Link } from "react-router-dom";
import MDRcommandMeatSlide from "./Slide/MDRcommandMeatSlide";
import "./config/MDRcommandSlide.scss";

class MDRcommand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentId: 1,
      filtering: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/data.json")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ data: res.data });
      });
  };
  clickHandler = clickdata => {
    const filtering = this.state.data.filter(data => {
      return data.name === clickdata;
    });
    console.log(filtering);
    this.setState({ filtering: filtering });
  };

  render() {
    console.log(this.state.data);
    return (
      <>
        <div className="mdRcommandContainer">
          <div className="mdRcommandHader">
            <h2>MD의 추천</h2>
          </div>
          <div className="mdRcommandMenu">
            {this.state.data?.map((data, index) => (
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
            <MDRcommandMeatSlide data={this.state.data} />
          </div>
        </div>
      </>
    );
  }
}

export default MDRcommand;
