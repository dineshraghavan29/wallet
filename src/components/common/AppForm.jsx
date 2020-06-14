import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from "./Button";
import moment from "moment";

function AppForm({ open, handleClose, title, handleSubmit }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));

  const mapExpense = () => {
    const expense = {
      description,
      amount,
      date,
    };
    handleSubmit(expense);
  };

  return (
    <Modal show={open} onHide={handleClose}>
      <form>
        <ModalHeader>
          <ModalTitle>
            <h3>{title}</h3>
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            onChange={(e) => setAmount(e.target.value)}
          />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) =>
              setDate(moment(e.target.value).format("YYYY-MM-DD"))
            }
          />
        </ModalBody>
        <ModalFooter>
          <Button label="Cancel" color="danger" onClick={handleClose}></Button>
          <Button label="Submit" color="success" onClick={mapExpense}></Button>
        </ModalFooter>
      </form>
    </Modal>
  );
}

export default AppForm;
