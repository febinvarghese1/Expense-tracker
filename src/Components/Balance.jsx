import React, { useContext } from 'react';
import { GlobalState } from '../context/GlobalContext';

const Balance = () => {
  const {transactions} = useContext(GlobalState);
  
  const total = transactions.reduce((acc,curr)=>{
      return acc + curr.amount;
  },0).toFixed(2);
  

  return (
    <div className='balance'>
      <div className='balance__container'>
        <h3>Your balance:</h3>
        <h2 className={total > 0 ? "balance__container--green" :"balance__container--red" }>${total}</h2>
    </div>
    </div>
  )
}

export default Balance