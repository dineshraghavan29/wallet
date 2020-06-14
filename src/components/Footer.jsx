import React from "react";
import Button from "./common/Button";

function Footer({ onclick }) {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6 d-flex justify-content-center">
          <Button
            label="Add Income"
            color="success"
            type="button"
            onClick={() => onclick("income")}
          />
        </div>
        <div className="col-6 d-flex justify-content-center">
          <Button
            label="Add Spending"
            color="danger"
            type="button"
            onClick={() => onclick("spending")}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
