/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import "./Footer.scss";

const MEMBERS = {
  frontend: [
    { name: "김찬영", githubUrl: "" },
    { name: "박채훈", githubUrl: "" },
    { name: "이장현", githubUrl: "" },
    { name: "한민아", githubUrl: "" },
  ],
  backend: [
    { name: "김원희", githubUrl: "" },
    { name: "이주형", githubUrl: "" },
    { name: "이현주", githubUrl: "" },
  ],
};
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
<<<<<<< HEAD
            <li>
              김찬영<i className="fab fa-github"></i>
            </li>
            <li>
              박채훈<i className="fab fa-github"></i>
            </li>
            <li>
              이장현<i className="fab fa-github"></i>
            </li>
            <li>
              한민아<i className="fab fa-github"></i>
            </li>
=======
            {MEMBERS.frontend.map((member, idx) => {
              return (
                <li key={idx}>
                  {member.name}
                  <i className="fab fa-github" />
                  {member.githubUrl}
                </li>
              );
            })}
>>>>>>> master
          </ul>
        </div>
        <div className="backend">
          <h2>Backend Members</h2>
          <ul>
<<<<<<< HEAD
            <li>
              김원희<i className="fab fa-github"></i>
            </li>
            <li>
              이주형<i className="fab fa-github"></i>
            </li>
            <li>
              이현주<i className="fab fa-github"></i>
            </li>
=======
            {MEMBERS.backend.map((member, idx) => {
              return (
                <li key={idx}>
                  {member.name}
                  <i className="fab fa-github" />
                  {member.githubUrl}
                </li>
              );
            })}
>>>>>>> master
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
