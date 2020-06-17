import React from "react";
import moment from "moment";

function List({ id, amount, description, date, type, onDelete }) {
  const amountStyle = type === "income" ? "font-green" : "font-red";
  return (
    <li className="list-group-item">
      <div className="container">
        <div className="row align-items-center justify-content-start">
          <div className="col-3">
            <h6>{moment(date).format("DD-MM-YYYY")}</h6>
            <span>
              <h4 className={amountStyle}>{amount}</h4>
            </span>
          </div>
          <div className="col-7">{description}</div>
          <div className="col-1">
            <span
              className="material-icons font-grey cursor-pointer"
              onClick={() => onDelete({ id, type, amount })}
            >
              delete_outline
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default List;
