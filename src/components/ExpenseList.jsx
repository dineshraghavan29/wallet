import React from "react";
import moment from "moment";
import _ from "lodash";
import List from "./common/List";

function ExpenseList({ incomes, spendings, onDelete }) {
  const items = incomes.concat(spendings);
  const sortedItems = _.orderBy(
    items,
    function (item) {
      return new moment(item.date);
    },
    ["desc"]
  );
  return (
    <div>
      <ul className="list-group" style={{ height: "300px", scroll: "auto" }}>
        {sortedItems.map((item) => {
          return <List key={item.id} {...item} onDelete={onDelete} />;
        })}
      </ul>
    </div>
  );
}

export default ExpenseList;
