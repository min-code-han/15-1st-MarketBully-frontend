import React, { Component } from "react";
export default class Third extends Component {
  render() {
    const { categoryAll } = this.props;
    const categorySub = categoryAll && categoryAll.subcategories.map(e => e.name);
    const categorySub22 = categorySub?.map(e => e);

    return (
      <div>
        <div>
          <ul>
            {categorySub22?.map((subcategoryName, index) => {
              return <li>{subcategoryName}</li>;
            })}
          </ul>{" "}
        </div>
      </div>
    );
  }
}
