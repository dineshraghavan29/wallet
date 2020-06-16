export const incomes = [
  {
    id: "1",
    description: "Salary from work",
    date: "2017-08-03",
    amount: 42000,
    type: "income",
  },
];

export const spendings = [
  {
    id: "2",
    description: "Groceries from Albert",
    date: "2017-09-01",
    amount: 1500,
    type: "spending",
  },
  {
    id: "3",
    description: "New shirt from Zara",
    date: "2017-08-01",
    amount: 1500,
    type: "spending",
  },
  {
    id: "4",
    description: "Icecream - it was hot outside",
    date: "2017-08-01",
    amount: 13,
    type: "spending",
  },
];

export function getIncomes() {
  return incomes;
}

export function getSpendings() {
  return spendings;
}
