import React from 'react'
import AddTransaction from './AddTransaction'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'
import TransactionList from './TransactionList';
import {GlobalState,GlobalProvider} from "../context/GlobalContext"

const Hero = () => {
  return (
    <GlobalProvider>
    <div className='hero'>
        <Balance />
        <IncomeExpense/>
        <TransactionList />
        <AddTransaction />
    </div>
    </GlobalProvider>
  )
}

export default Hero