import React from "react";
import Expenses from "./Expenses";
import * as dataService from "./services/fakeDataService";
import { getInitialData } from "./utils/expenseUtil";

function ExpenseContainer(props) {
  const {
    incomes,
    spendings,
    totIncome,
    totSpending,
    initialbalance,
  } = getInitialData(dataService.getIncomes(), dataService.getSpendings());
  return (
    <Expenses
      incomes={incomes}
      spendings={spendings}
      totIncome={totIncome}
      totSpending={totSpending}
      initialbalance={initialbalance}
    />
  );
}

export default ExpenseContainer;
