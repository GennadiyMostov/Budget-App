import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses({ expenses }) {
  return (
    <div className='expenses'>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
