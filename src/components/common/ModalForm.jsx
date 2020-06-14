import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import moment from "moment";
import Button from "./Button";

function ModalForm({ open, handleClose, title, handleSubmit }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));

  const mapExpense = (e) => {
    e.preventDefault();
    const expense = {
      description,
      amount,
      date,
    };
    handleSubmit(expense);
  };

  return (
    <Modal show={open} onHide={handleClose}>
      <form onSubmit={mapExpense}>
        <ModalHeader>
          <ModalTitle>
            <h3>{title}</h3>
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <label htmlFor="description">Description *</label>
          <input
            type="text"
            className="form-control"
            id="description"
            size="50"
            maxLength="50"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <label htmlFor="amount">Amount *</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            size="50"
            maxLength="50"
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control width-40"
            id="date"
            value={date}
            onChange={(e) =>
              setDate(moment(e.target.value).format("YYYY-MM-DD"))
            }
          />
        </ModalBody>
        <ModalFooter>
          <Button
            label="Cancel"
            color="danger"
            type="button"
            onClick={handleClose}
          ></Button>
          <Button label="Submit" color="success" type="submit"></Button>
        </ModalFooter>
      </form>
    </Modal>
  );
}

export default ModalForm;
