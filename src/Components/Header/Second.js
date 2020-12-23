import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

export default class Second extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/home">
              {" "}
              <img
                src="https://img-cf.kurly.com/shop/data/category/icon_yearend_inactive_pc@2x.1606988604.png"
                alt="연말대전"
              ></img>
              Link1 ewrewrrwr rewrew
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
