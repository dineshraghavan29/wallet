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
    <div className="expense-list">
      <ul className="list-group">
        {sortedItems.map((item) => {
          return <List key={item.id} {...item} onDelete={onDelete} />;
        })}
      </ul>
    </div>
  );
}

export default ExpenseList;
