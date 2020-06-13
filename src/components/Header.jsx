import React from "react";

function Header({ balance, totalIncome, totalSpending }) {
  return (
    <div class="card">
      <div class="card-body">
        Balance <br />
        <h2> {balance} </h2> <br />
        Income: {totalIncome} | Spendings: {totalSpending}
      </div>
    </div>
  );
}

export default Header;
