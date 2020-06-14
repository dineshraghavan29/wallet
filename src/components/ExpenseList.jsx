import React from "react";
import List from "./common/List";
import { filterItems } from "./utils/expenseUtil";

function ExpenseList({ incomes, spendings, filter, onDelete }) {
  const sortedItems = filterItems(incomes, spendings, filter);
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
