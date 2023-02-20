import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalContext";
const TransactionList = () => {
  const { transactions, deleteTransactions } = useContext(GlobalState);
  return (
    <div className="transaction">
      <h3>History</h3>
      <ul className="transaction__list">
        {transactions.map((item) => (
          <li className="transaction__list_item" key={item.id}>
            {item.text}{" "}
            <div className="transaction__list_item_contain">
              <span className={item.amount < 0 ? "transaction__list_item_contain--red":"transaction__list_item_contain--green"}>{item.amount}</span>
              <button onClick={() => deleteTransactions(item.id)}>x</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
