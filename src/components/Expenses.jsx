import React, { useState, useEffect } from "react";
import Header from "./Header";
import ExpenseList from "./ExpenseList";
import Button from "./common/Button";
import AppForm from "./common/AppForm";

function Expenses(props) {
  const [income, setIncome] = useState([]);
  const [spending, setSpending] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalSpending, setTotalSpending] = useState(0);
  const [balance, setBalance] = useState(0);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log(balance);
  }, [income, spending]);

  const handleClickOpen = (label) => {
    label.indexOf("income") >= 0
      ? setTitle("Add Income")
      : setTitle("Add Spending");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = ({ id, type, amount }) => {
    if (type == "income") {
      const filteredIncome = income.filter((inc) => inc.id !== id);
      setIncome(filteredIncome);
      setTotalIncome((totalIncome) => parseInt(totalIncome) - parseInt(amount));
      setBalance((balance) => balance - parseInt(amount));
    }
    if (type == "spending") {
      const filteredSpending = spending.filter((inc) => inc.id !== id);
      setSpending(filteredSpending);
      setTotalSpending(
        (totalSpending) => parseInt(totalSpending) - parseInt(amount)
      );
      setBalance((balance) => balance + parseInt(amount));
    }
  };

  const handleSubmit = (values) => {
    const expense = createObject(values);
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

  function createObject(values) {
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

  return (
    <div className="card">
      <div className="card-body">
        <Header
          balance={balance}
          totalIncome={totalIncome}
          totalSpending={totalSpending}
        ></Header>
        <ExpenseList
          incomes={income}
          spendings={spending}
          onDelete={handleDelete}
        />
        <div class="container">
          <div className="row justify-content-center">
            <div className="col-4">
              <Button
                label="Add Income"
                color="success"
                onClick={() => handleClickOpen("income")}
              />
            </div>
            <div className="col-4">
              <Button
                label="Add Spending"
                color="danger"
                onClick={() => handleClickOpen("spending")}
              />
            </div>
          </div>
        </div>

        <AppForm
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
