/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="Footer">
        <img className="logo" src="images/marketbully.png" alt="marketbully logo" />
        <div className="frontend">
          <h2>Frontend Members</h2>
          <ul>
            <li>
              김찬영<i class="fab fa-github"></i>
            </li>
            <li>
              박채훈<i class="fab fa-github"></i>
            </li>
            <li>
              이장현<i class="fab fa-github"></i>
            </li>
            <li>
              한민아<i class="fab fa-github"></i>
            </li>
          </ul>
        </div>
        <div className="backend">
          <h2>Backend Members</h2>
          <ul>
            <li>
              김원희<i class="fab fa-github"></i>
            </li>
            <li>
              이주형<i class="fab fa-github"></i>
            </li>
            <li>
              이현주<i class="fab fa-github"></i>
            </li>
          </ul>
        </div>
        <div className="member-picture">
          <img src="" alt="" />
        </div>
      </footer>
    );
  }
}

export default Footer;
