import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./config/EventNews.scss";
class EventNews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="eventNews">
          <div className="eventNewsWrap">
            <div className="eventHeader">
              <Link style={{ textDecoration: "none", color: "#000" }} to="/">
                <h2>이벤트 소식</h2>
              </Link>
            </div>
            <div className="eventNewsList">
              <ul>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <div className="eventImage">
                      <img src="./images/스테이크.jpg"></img>
                    </div>{" "}
                    <div className="eventDesc">
                      {" "}
                      <span>창화당 최대 20% 할인</span>
                      <span>만두 참 잘하는 집</span>
                    </div>{" "}
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <div className="eventImage">
                      <img src="./images/스테이크.jpg"></img>
                    </div>{" "}
                    <div className="eventDesc">
                      {" "}
                      <span>창화당 최대 20% 할인</span>
                      <span>만두 참 잘하는 집</span>
                    </div>{" "}
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <div className="eventImage">
                      <img src="./images/스테이크.jpg"></img>
                    </div>{" "}
                    <div className="eventDesc">
                      {" "}
                      <span>창화당 최대 20% 할인</span>
                      <span>만두 참 잘하는 집</span>
                    </div>{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EventNews;
