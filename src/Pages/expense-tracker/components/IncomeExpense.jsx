import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container4">
      <div>
        <h4>Income</h4>
        <p className="money4 plus4">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money4 minus4">-${expense}</p>
      </div>
    </div>
  )
}

export default IncomeExpense