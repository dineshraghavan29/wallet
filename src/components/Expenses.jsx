import React, { useState, useEffect } from "react";
import Header from "./Header";
import ExpenseList from "./ExpenseList";
import ModalForm from "./common/ModalForm";
import Footer from "./Footer";
import { constructExpneseObj } from "./utils/expenseUtil";

function Expenses({
  incomes,
  spendings,
  totIncome,
  totSpending,
  initialbalance,
}) {
  const [income, setIncome] = useState(incomes);
  const [spending, setSpending] = useState(spendings);
  const [totalIncome, setTotalIncome] = useState(totIncome);
  const [totalSpending, setTotalSpending] = useState(totSpending);
  const [balance, setBalance] = useState(initialbalance);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {}, [income, spending, filter]);

  const handleClickOpen = (label) => {
    label.indexOf("income") >= 0
      ? setTitle("Add Income")
      : setTitle("Add Spending");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const handleDelete = ({ id, type, amount }) => {
    if (type === "income") {
      const filteredIncome = income.filter((inc) => inc.id !== id);
      localStorage.setItem("incomes", JSON.stringify(filteredIncome));
      setIncome(filteredIncome);
      setTotalIncome((totalIncome) => parseInt(totalIncome) - parseInt(amount));
      setBalance((balance) => balance - parseInt(amount));
    }
    if (type === "spending") {
      const filteredSpending = spending.filter((inc) => inc.id !== id);
      localStorage.setItem("spendings", JSON.stringify(filteredSpending));
      setSpending(filteredSpending);
      setTotalSpending(
        (totalSpending) => parseInt(totalSpending) - parseInt(amount)
      );
      setBalance((balance) => balance + parseInt(amount));
    }
  };

  const handleSubmit = (values) => {
    const expense = constructExpneseObj(values, title);
    if (title.toLocaleLowerCase().indexOf("income") >= 0) {
      localStorage.setItem("incomes", JSON.stringify([...income, expense]));
      setIncome((income) => [...income, expense]);
      setTotalIncome(
        (totalIncome) => parseInt(totalIncome) + parseInt(expense.amount)
      );
      setBalance((balance) => balance + parseInt(expense.amount));
    }
    if (title.toLocaleLowerCase().indexOf("spending") >= 0) {
      localStorage.setItem("spendings", JSON.stringify([...spending, expense]));
      setSpending((spending) => [...spending, expense]);
      setTotalSpending(
        (totalSpending) => parseInt(totalSpending) + parseInt(expense.amount)
      );
      setBalance((balance) => balance - parseInt(expense.amount));
    }
    setOpen(false);
  };

  return (
    <div className="card">
      <div className="card-body">
        <Header
          balance={balance}
          totalIncome={totalIncome}
          totalSpending={totalSpending}
          filter={filter}
          onSelect={handleFilter}
        ></Header>
        <ExpenseList
          incomes={income}
          spendings={spending}
          filter={filter}
          onDelete={handleDelete}
        />
        <Footer onclick={handleClickOpen}></Footer>
        <ModalForm
          open={open}
          handleClose={handleClose}
          title={title}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Expenses;
