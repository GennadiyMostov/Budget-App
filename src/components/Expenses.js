import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';

function Expenses({ items }) {
  return (
    <Card className='expenses'>
      {items.map((expenseData) => {
        return (
          <ExpenseItem
            title={expenseData.title}
            amount={expenseData.amount}
            date={expenseData.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
