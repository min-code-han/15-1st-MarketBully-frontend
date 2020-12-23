import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Four extends Component {
  gotoDetail = e => {
    this.props.AllRemove();
    this.props.history.push("/ItemList");
  };

  render() {
    const { categoryAll } = this.props;
    const categorySub = categoryAll && categoryAll.subcategories.map(e => e);
    // const cateogrySubId = categoryAll && categoryAll.subcategories.map(e => e.id);
    const categorySubFilter = categorySub && categorySub.map(e => e);

    return (
      <div>
        <div>
          <ul>
            {categorySubFilter &&
              categorySubFilter.map((subcategoryName, index) => {
                return (
                  <li key={index} id={subcategoryName.id} onClick={this.gotoDetail}>
                    {subcategoryName.name}
                  </li>
                );
              })}
          </ul>{" "}
        </div>
      </div>
    );
  }
}
export default withRouter(Four);
