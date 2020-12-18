import React, { Component } from "react";
import { Link } from "react-router-dom";
import MDRcommanSlide from "./Slide/MDRcommanSlide";
import "./config/MDRcommandSlide.scss";
class MDRcommand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/Mddata.json")
      .then(res => res.json())
      .then(res => this.setState({ data: res.data }));
  };

  render() {
    return (
      <>
        <div class="mdRcommandContainer">
          <div className="mdRcommandHader">
            <h2>MD의 추천</h2>
          </div>

          <div className="mdRcommandMenu">
            {this.state.data?.map(data => (
              <button
                class="mdRcommandBtn"
                data-filter={data.filterName}
                onClick={this.clickHandler}
              >
                {data.name}
              </button>
            ))}
          </div>
          <div className="RcommandSlideContainer">
            <MDRcommanSlide data={this.state.data} mode={this.state.mode} />
          </div>
        </div>
      </>
    );
  }
}

export default MDRcommand;
