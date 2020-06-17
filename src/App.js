import React from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import ExpenseContainer from "./components/ExpenseContainer";
import NotFound from "./components/NotFound";

function App() {
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
            <Route path="/" exact component={ExpenseContainer} />
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect to="not-found"></Redirect>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
