import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Third extends Component {
  gotoDetail = () => {
    this.props.history.push("/ItemList");
  };

  render() {
    const { categoryAll } = this.props;
    const categorySub = categoryAll && categoryAll.subcategories.map(e => e.name);
    const categorySub22 = categorySub?.map(e => e);

    return (
      <div>
        <div>
          <ul>
            {categorySub22?.map((subcategoryName, index) => {
              return <li onClick={this.gotoDetail}>{subcategoryName}</li>;
            })}
          </ul>{" "}
        </div>
      </div>
    );
  }
}
export default withRouter(Third);
