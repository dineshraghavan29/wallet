import React from "react";
import moment from "moment";
import Button from "./Button";

function List({ id, amount, description, date, type, onDelete }) {
  return (
    <li className="list-group-item">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-3">{moment(date).format("DD-MM-YYYY")}</div>
          <div className="col-2">{amount}</div>
          <div className="col-5">{description}</div>
          <div className="col-2">
            <Button
              label="Delete"
              color="danger"
              onClick={() => onDelete({ id, type, amount })}
            />
          </div>
        </div>
      </div>
    </li>
  );
}

export default List;
