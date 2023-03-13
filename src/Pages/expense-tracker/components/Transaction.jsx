import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

const Transaction = ({transaction}) => {
  const {deleteTransaction} = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus4' : 'plus4'}>
          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn4">x</button>
    </li>
  )
}

export default Transaction