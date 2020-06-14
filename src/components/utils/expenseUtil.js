import moment from "moment";
import _ from "lodash";

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
