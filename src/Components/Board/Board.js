import React, { Component } from "react";
import ItemDetailMenu from "../../Pages/ItemDetail/Components/ItemDetailMenu";
import "./Board.scss";

const BOARD_TITLE = {
  4: "PRODUCT REVIEW",
  5: "PRODUCT Q&A",
};
const boardContent = [1, 2, 3, 4, 5, 6, 7, 8];
const paging = ["<", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ">"];
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { menuTabId } = this.props;
    console.log(menuTabId);
    return (
      <div className="Board">
        <ItemDetailMenu menuTabId={menuTabId} />
        <div className="menu-header">
          <h1>{BOARD_TITLE[menuTabId]}</h1>
        </div>
        <table className="board-table">
          <thead>
            <tr>
              <th>번호</th>
              <th className="title">제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>도움</th>
              <th>조회</th>
            </tr>
          </thead>
          <tbody>
            {boardContent.map((elem, idx) => {
              return (
                <tr key={idx}>
                  <td>{elem}</td>
                  <td className="title">제목입니다</td>
                  <td>장현</td>
                  <td>2020-12-12</td>
                  <td>0</td>
                  <td>2</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="button-box">
          <button>작성</button>
        </div>
        <div className="page-routing">
          <ul className="page-list">
            {paging.map((page, idx) => {
              return (
                <li key={idx}>
                  <button>{page}</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Board;
