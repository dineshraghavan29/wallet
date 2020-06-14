import React from "react";
import DropDownList from "./common/DropDownList";

function Header({ balance, totalIncome, totalSpending, filter, onSelect }) {
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
          <div className="col">
            Filter
            <br />
            <DropDownList
              selectedItem={filter}
              itemList={["All", "Incomes", "Spendings"]}
              onSelect={onSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
