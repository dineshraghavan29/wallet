import React, { useState, useEffect } from "react";
import Header from "./Header";
import ExpenseList from "./ExpenseList";
import ModalForm from "./common/ModalForm";
import Footer from "./Footer";
import { constructExpneseObj } from "./utils/expenseUtil";

function Expenses(props) {
  const [income, setIncome] = useState([]);
  const [spending, setSpending] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalSpending, setTotalSpending] = useState(0);
  const [balance, setBalance] = useState(0);
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
      setIncome(filteredIncome);
      setTotalIncome((totalIncome) => parseInt(totalIncome) - parseInt(amount));
      setBalance((balance) => balance - parseInt(amount));
    }
    if (type === "spending") {
      const filteredSpending = spending.filter((inc) => inc.id !== id);
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
      setIncome((income) => [...income, expense]);
      setTotalIncome(
        (totalIncome) => parseInt(totalIncome) + parseInt(expense.amount)
      );
      setBalance((balance) => balance + parseInt(expense.amount));
    }
    if (title.toLocaleLowerCase().indexOf("spending") >= 0) {
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
