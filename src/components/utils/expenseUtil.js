import moment from "moment";
import _ from "lodash";

export function getInitialData(incomesData, spendingsData) {
  let incomes = localStorage.getItem("incomes");
  let spendings = localStorage.getItem("spendings");
  if (
    incomes &&
    spendings &&
    (JSON.parse(incomes).length > 0 || JSON.parse(spendings).length > 0)
  ) {
    incomes = JSON.parse(incomes);
    spendings = JSON.parse(spendings);
  } else {
    incomes = incomesData;
    spendings = spendingsData;
  }
  let totIncome = 0;
  let totSpending = 0;
  let initialbalance = 0;

  incomes.map((income) => (totIncome += parseInt(income.amount)));
  spendings.map((spending) => (totSpending += parseInt(spending.amount)));
  initialbalance = totIncome - totSpending;
  localStorage.setItem("incomes", JSON.stringify(incomes));
  localStorage.setItem("spendings", JSON.stringify(spendings));
  return { incomes, spendings, totIncome, totSpending, initialbalance };
}

export function constructExpneseObj(values, title) {
  let id = 0;
  let type = "";
  if (title.toLocaleLowerCase().indexOf("income") >= 0) {
    id = Math.floor(Math.random() * 100);
    type = "income";
  }
  if (title.toLocaleLowerCase().indexOf("spending") >= 0) {
    id = Math.floor(Math.random() * 1000);
    type = "spending";
  }
  const expense = {
    id: id,
    description: values.description,
    amount: values.amount,
    date: values.date,
    type: type,
  };
  return expense;
}

export function filterItems(incomes, spendings, filter) {
  let items = [];
  if (filter.toLocaleLowerCase() === "all") items = incomes.concat(spendings);
  if (filter.toLocaleLowerCase() === "incomes") items = incomes;
  if (filter.toLocaleLowerCase() === "spendings") items = spendings;
  const sortedItems = _.orderBy(
    items,
    function (item) {
      return new moment(item.date);
    },
    ["desc"]
  );
  return sortedItems.length > 0 ? sortedItems : items;
}
