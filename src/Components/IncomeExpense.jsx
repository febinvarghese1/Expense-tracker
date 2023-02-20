import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalContext";
const IncomeExpense = () => {
  
  const {transactions} = useContext(GlobalState);


  const reduceValue = array =>{
    const newArray = array.reduce((acc,curr)=>{
        return acc + curr.amount;
    },0)
    return newArray;
  }
  
  const income = transactions.filter(item=>{
    return item.amount > 0;
  });
  const expense = transactions.filter(item=>{
    return item.amount <= 0;
  });


  



  return (
    <div className="amount">
      <div className="amount__income">
        <h3>Income</h3>
        <p>+${reduceValue(income)}</p>
      </div>
      <div className="amount__border"></div>
      <div className="amount__expense">
        <h3>Expense</h3>
        <p>-${Math.abs(reduceValue(expense))}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
