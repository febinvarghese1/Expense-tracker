import React, { useState, useContext } from "react";
import { GlobalState } from "../context/GlobalContext";
const AddTransaction = () => {
  const { addTransactions } = useContext(GlobalState);

  const [inputText, setInputText] = useState("");
  const [amount, setAmount] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    addTransactions({
      id: Math.floor(Math.random() * 100),
      text: inputText,
      amount: parseInt(amount),
    });
  };

  return (
    <div className="addTransaction">
      <h3>Add Transaction</h3>
      <form onSubmit={submitHandler} className="addTransaction__form">
        <div className="addTransaction__form_text">
          <label>Text</label>
          <input
            placeholder="Enter text"
            value={inputText}
            type="text"
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <div className="addTransaction__form_amount">
          <label>Enter amount</label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddTransaction;
