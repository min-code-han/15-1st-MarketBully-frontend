import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./config/EventNews.scss";

class EventNews extends Component {
  render() {
    return (
      <div className="eventNews">
        <div className="eventNewsWrap">
          <div className="eventHeader">
            <Link to="/">
              <h2>이벤트 소식 </h2>
            </Link>
          </div>
          <div className="eventNewsList">
            <ul>
              <li>
                <Link to="/">
                  <div className="eventImage">
                    <img src="images/스테이크.jpg" />
                  </div>
                  <div className="eventDesc">
                    <span>창화당 최대 20% 할인</span>
                    <span>만두 참 잘하는 집</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="eventImage">
                    <img src="images/스테이크.jpg" />
                  </div>
                  <div className="eventDesc">
                    <span>창화당 최대 20% 할인</span>
                    <span>만두 참 잘하는 집</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="eventImage">
                    <img src="images/스테이크.jpg" />
                  </div>
                  <div className="eventDesc">
                    <span>창화당 최대 20% 할인</span>
                    <span>만두 참 잘하는 집</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default EventNews;
