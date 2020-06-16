import React from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import Expenses from "./components/Expenses";
import NotFound from "./components/NotFound";
import * as dataService from "./components/services/fakeDataService";
import { getInitialData } from "./components/utils/expenseUtil";

function App() {
  const {
    incomes,
    spendings,
    totIncome,
    totSpending,
    initialbalance,
  } = getInitialData(dataService.getIncomes(), dataService.getSpendings());
  return (
    <div className="containter-fluid">
      <div className="row justify-content-center">
        <Link to="/" className="disable-link">
          <h1>Wallet</h1>
        </Link>
      </div>
      <div className="row justify-content-center">
        <div className="col col-lg-6 col-md-10 col-sm-10 col-auto">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Expenses
                  incomes={incomes}
                  spendings={spendings}
                  totIncome={totIncome}
                  totSpending={totSpending}
                  initialbalance={initialbalance}
                />
              )}
            />
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect to="not-found"></Redirect>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
