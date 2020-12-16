import React, { Component } from "react";
import { Link } from "react-router-dom";
import MDRcommanSlide from "./Slide/MDRcommanSlide";
import "./config/MDRcommandSlide.scss";
class MDRcommand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "정육", filterName: "yearevent", img: "./images/디저트.jpg" },
        { name: "소고기", filterName: "vegetable", img: "./images/스테이크.jpg" },
        { name: "돼지고기", filterName: "meat", img: "./images/밥상.jpg" },
        { name: "계란류", filterName: "bakery", img: "./images/스테이크.jpg" },
        { name: "닭", filterName: "bakery", img: "./images/스테이크.jpg" },
        { name: "계란류", filterName: "bakery", img: "./images/스테이크.jpg" },
        { name: "양고기", filterName: "bakery", img: "./images/스테이크.jpg" },
      ],
      filterTarget: "",
      mode: false,
    };
  }

  clickHandler = e => {
    const filterTarget = e.target.dataset.filter;
    if (filterTarget) {
      this.state.data.map(data => {
        if (filterTarget == data.filterName) {
          this.setState({
            mode: !this.state.mode,
          });
        }
      });
    }
  };

  render() {
    console.log(this.state.mode);
    return (
      <>
        <div class="mdRcommandContainer">
          {/* MD MenuList */}

          <div className="mdRcommandHader">
            <h2>MD의 추천</h2>
          </div>
          {/* mdRcommandBtn */}
          <div className="mdRcommandMenu">
            {this.state.data.map(data => (
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
            {/* MD Slide Card */}
            <MDRcommanSlide mode={this.state.mode} clickHandler={this.state.filterTarget} />
          </div>
        </div>
      </>
    );
  }
}

export default MDRcommand;
