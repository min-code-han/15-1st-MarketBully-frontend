import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
export default class Third extends Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            <li>
              <Link to="/">
                {" "}
                <img
                  src="https://img-cf.kurly.com/shop/data/category/icon_yearend_inactive_pc@2x.1606988604.png"
                  alt="연말대전"
                ></img>
                Link1
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
