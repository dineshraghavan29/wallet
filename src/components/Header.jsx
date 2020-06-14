import React from "react";

function Header({ balance, totalIncome, totalSpending }) {
  return (
    <div className="card header">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col">
            Balance
            <br />
            <h1> {balance} </h1>
          </div>
          <div className="col">
            Income <br />
            <h3 className="font-green">{totalIncome}</h3>
          </div>
          <div className="col">
            Spendings <br />
            <h3 className="font-red">{totalSpending}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
