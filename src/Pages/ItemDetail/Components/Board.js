import React, { Component } from "react";
import { REVIEW_BOARD_API } from "../../../config";
import "./Board.scss";

const BOARD_NAME = {
  4: "Review",
  5: "Inquire",
};
const PAGES = ["<", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ">"];
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardData: [],
      showForm: false,
    };
  }

  postArticle = async () => {
    /* 보드 종류별로 다른 API에 저장해야 한다. */
    const response = await fetch(REVIEW_BOARD_API);
    const result = await response.json();
    await console.log(result);
  };

  showWriteForm = () => {
    const { showForm } = this.state;
    if (showForm) {
      this.setState({ showForm: false });
      this.postArticle();
    } else {
      this.setState({ showForm: true });
    }
  };

  cancelWriteForm = () => {
    this.setState({ showForm: false });
  };

  openBoardContent = e => {
    const { boardData } = this.state;
    for (let i = 0; i < boardData.length; i++) {
      if (boardData[i].id === +e.target.id) boardData[i].show = !boardData[i].show;
    }
    this.setState({ boardData: boardData });
  };

  getReviewData = async () => {
    const reviewDataRes = await fetch(`data/review.json`);
    const reviewData = await reviewDataRes.json();
    this.setState({ boardData: reviewData.reviewData });
  };

  getInquireData = async () => {
    const inquireDataRes = await fetch(`data/inquire.json`);
    const inquireData = await inquireDataRes.json();
    this.setState({ boardData: inquireData.inquireData });
  };

  getData = async () => {
    const response = await fetch(REVIEW_BOARD_API);
    const data = await response.json();
    this.setState({ boardData: data.data });
  };

  componentDidMount() {
    const { menuTabId } = this.props;
    const { getReviewData, getInquireData } = this;
    menuTabId === 4 ? getReviewData() : getInquireData();
  }
  render() {
    const { menuTabId, showLike } = this.props;
    const { showForm } = this.state;
    const { showWriteForm, cancelWriteForm } = this;
    return (
      <div className="Board">
        <div className="menu-header">
          <h1>{`${BOARD_NAME[menuTabId]} Board`}</h1>
        </div>
        <table className="board-table">
          <thead>
            <tr>
              <th className="id">번호</th>
              <th className="title">제목</th>
              <th className="writer">작성자</th>
              <th className="date">작성일</th>
              {showLike && <th className="like">도움</th>}
              <th className="lookup">조회</th>
            </tr>
          </thead>

          {this.state.boardData.map(review => {
            return (
              <tbody key={review.id}>
                <tr>
                  <td className="id">{review.id}</td>
                  <td className="title" id={review.id} onClick={this.openBoardContent}>
                    {review.title}
                  </td>
                  <td className="writer">{review.writer}</td>
                  <td className="date">{review.date}</td>
                  {showLike && <td className="like">{review.like}</td>}
                  <td className="lookup">{review.lookup}</td>
                </tr>
                <tr>
                  {true && (
                    <td colSpan="6" className={`content ${review.show ? "show" : ""}`}>
                      {review.show ? review.content : ""}
                    </td>
                  )}
                </tr>
              </tbody>
            );
          })}
        </table>
        <div className={`textarea ${!showForm && "hide"}`}>
          <textarea defaultValue="갓원희 찬양해!" />
        </div>
        <div className="button-box">
          <button className={`cancel ${!showForm && "hide"}`} onClick={cancelWriteForm}>
            취소
          </button>
          <button onClick={showWriteForm}>작성</button>
        </div>
        <div className="page-routing">
          <ul>
            {PAGES.map((page, idx) => {
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
