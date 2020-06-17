import React from "react";

function Header({ balance, totalIncome, totalSpending, filter, onSelect }) {
  return (
    <div className="card header">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col">
            Balance
            <p>
              <h1> {balance} </h1>
            </p>
            <p>
              <span className="font-green">Income: {totalIncome}</span>
              <span className="font-red"> Spendings: {totalSpending}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
