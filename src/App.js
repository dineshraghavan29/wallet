import React from "react";
import Expenses from "./components/Expenses";

function App() {
  return (
    <div className="containter">
      <div className="row justify-content-center">
        <h1 className="title">Wallet</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-3"></div>
        <div className="col-6">
          <Expenses />
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default App;
