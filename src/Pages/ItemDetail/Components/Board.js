import React, { Component } from "react";
import { REVIEW_BOARD_API, INQUIRY_BOARD_API, REVIEW_MOCK, INQUIRE_MOCK } from "../../../config";
import "./Style/Board.scss";

const BOARD_NAME = {
  4: "Review",
  5: "Inquire",
};

const LIMIT_PER_PAGE = 4;
const PAGES_NUM = 3;
const INITIAL_PAGES = Array.from({ length: PAGES_NUM }, (_, i) => i + 1);

class Board extends Component {
  state = {
    boardData: [],
    showForm: false,
    currentPage: 1,
    pages: INITIAL_PAGES,
  };

  postArticle = async () => {
    /* 보드 종류별로 다른 API에 저장해야 한다. */
    const response = await fetch(`http://HOST/review/board/1`);
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

  clickPage = e => {
    this.getBoardData(e.target.id - 1);
    this.setState({ currentPage: +e.target.id });
  };

  goPrevPage = () => {
    const { currentPage, pages } = this.state;
    console.log("go Prev Page");
    if (currentPage === 1) return;
    else if (currentPage % PAGES_NUM === 1) {
      const newPages = pages.map(page => page - PAGES_NUM);
      this.setState({ pages: newPages, currentPage: newPages[PAGES_NUM - 1] });
    } else {
      this.setState({ currentPage: currentPage - 1 });
    }
    this.getBoardData(currentPage - 1);
  };

  goNextPage = () => {
    console.log("go Next Page");
    const { currentPage, pages } = this.state;
    if (currentPage % PAGES_NUM === 0) {
      const newPages = pages.map(page => page + PAGES_NUM);
      this.setState({ pages: newPages, currentPage: newPages[0] });
    } else {
      this.setState({ currentPage: currentPage + 1 });
    }
    this.getBoardData(currentPage + 1);
  };

  cancelWriteForm = () => {
    this.setState({ showForm: false });
  };

  openBoardContent = e => {
    const { boardData } = this.state;
    boardData.forEach(data => (data.show = data.id === +e.target.id ? !data.show : false));
    this.setState({ boardData: boardData });
  };

  getReviewData = async (page = "") => {
    console.log(`${REVIEW_MOCK}?limit=${LIMIT_PER_PAGE}&offset=${page * LIMIT_PER_PAGE}`);
    const reviewDataRes = await fetch(
      `${REVIEW_MOCK}?limit=${LIMIT_PER_PAGE}&offset=${page * LIMIT_PER_PAGE}`
    );
    const reviewData = await reviewDataRes.json();
    this.setState({ boardData: reviewData.reviewData });
  };

  getInquireData = async () => {
    const inquireDataRes = await fetch(INQUIRE_MOCK);
    const inquireData = await inquireDataRes.json();
    this.setState({ boardData: inquireData.inquireData });
  };

  getBoardData = async (page = "") => {
    const BOARD_API = this.props.menuTabID === 4 ? REVIEW_BOARD_API : INQUIRY_BOARD_API;
    console.log(
      `http://10.168.2.97:8000/board/review/page/1?limit=${LIMIT_PER_PAGE}&offset=${
        page * LIMIT_PER_PAGE
      }`
    );
    const response = await fetch(
      `http://10.168.2.97:8000/board/review/page/1?limit=${LIMIT_PER_PAGE}&offset=${
        page * LIMIT_PER_PAGE
      }`
    );
    const data = await response.json();
    this.setState({ boardData: data.review_list });
    console.log(data);
  };

  componentDidMount() {
    const { menuTabId } = this.props;
    const { getReviewData, getBoardData, getInquireData } = this;
    menuTabId === 4 ? getBoardData() : getInquireData();
  }

  render() {
    const { menuTabId, showLike } = this.props;
    const { showForm, boardData, currentPage, pages } = this.state;
    const {
      showWriteForm,
      cancelWriteForm,
      openBoardContent,
      clickPage,
      goPrevPage,
      goNextPage,
    } = this;
    return (
      <section className="Board">
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

          {boardData.map(review => {
            const { id, title, writer, date, like, lookup, show, contents } = review;
            return (
              <tbody key={id}>
                <tr>
                  <td className="id">{id}</td>
                  <td className="title" id={id} onClick={openBoardContent}>
                    {title}
                  </td>
                  <td className="writer">{writer}</td>
                  <td className="date">{date}</td>
                  {showLike && <td className="like">{like}</td>}
                  <td className="lookup">{lookup}</td>
                </tr>
                <tr>
                  <td colSpan="6" className={`content ${show ? "show" : ""}`}>
                    {show ? contents : ""}
                  </td>
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
          <button className="write" onClick={showWriteForm}>
            작성
          </button>
        </div>
        <div className="page-routing">
          <ul>
            <li>
              <button onClick={goPrevPage}>{"<"}</button>
            </li>
            {pages.map((page, idx) => {
              return (
                <li key={idx}>
                  <button
                    id={pages[idx]}
                    className={currentPage === pages[idx] ? "current-page" : ""}
                    onClick={clickPage}
                  >
                    {page}
                  </button>
                </li>
              );
            })}
            <li>
              <button onClick={goNextPage}>{">"}</button>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Board;
