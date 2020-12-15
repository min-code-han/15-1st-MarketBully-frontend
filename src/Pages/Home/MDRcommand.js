import React, { Component } from "react";
import { Link } from "react-router-dom";
import MDRcommanSlide from "./Slide/MDRcommanSlide";
import "./config/MDRcommand.scss";
class MDRcommand extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div class="mdRcommandContainer">
          {/* MD MenuList */}
          <div className="mdRcommand">
            <div className="mdRcommandHader">
              <h2>MD의 추천</h2>
            </div>
            <div className="mdRcommandMenu">
              <ul>
                <li>
                  <Link to="/">연말대전</Link>
                </li>
                <li>
                  <Link to="/">채소</Link>
                </li>
                <li>
                  <Link to="/">과일</Link>
                </li>
                <li>
                  <Link to="/">정육</Link>
                </li>
                <li>
                  <Link to="/">고기</Link>
                </li>
                <li>
                  <Link to="/">주방용품</Link>
                </li>
                <li>
                  <Link to="/">베이커리</Link>
                </li>
                <li>
                  <Link to="/">음료</Link>
                </li>
                <li>
                  <Link to="/">반려동물</Link>
                </li>
                <li>
                  <Link to="/">연말대전</Link>
                </li>
                <li>
                  <Link to="/">연말대전</Link>
                </li>
                <li>
                  <Link to="/">연말대전</Link>
                </li>
                <li>
                  <Link to="/">연말대전</Link>
                </li>
                <li>
                  <Link to="/">연말대전</Link>
                </li>
                <li>
                  <Link to="/">연말대전</Link>
                </li>
                <li>
                  <Link to="/">연말대전</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* MD Slide Card */}
          <MDRcommanSlide />
        </div>
      </>
    );
  }
}

export default MDRcommand;
