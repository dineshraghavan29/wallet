import React from "react";

function Header({ balance, totalIncome, totalSpending, filter, onSelect }) {
  return (
    <div className="card header">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col">
            Balance
            <br />
            <h1> {balance} </h1> <br />
            <span className="font-green">Income: {totalIncome}</span>
            <span className="font-red"> Spendings: {totalSpending}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
