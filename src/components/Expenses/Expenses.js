import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import ExpenseChart from './ExpenseChart';
import './Expenses.css';

const Expenses = ({ items }) => {
  const [filteredList, setFilteredList] = useState(items);

  //Maps Expense Items Data
  const ifExpenseContentTrue = filteredList.map((expenseData) => {
    return (
      <ExpenseItem
        key={expenseData.id}
        title={expenseData.title}
        amount={expenseData.amount}
        date={expenseData.date}
      />
    );
  });

  const ifExpenseContentFalse = (
    <h2 className='expenses-list__fallback'>No Expenses Found</h2>
  );

  //If No Expense Data, Return 'p' Element, else return data.
  const expenseContent =
    filteredList.length === 0 ? ifExpenseContentFalse : ifExpenseContentTrue;

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter items={items} onFilter={setFilteredList} />
        <ExpenseChart expenses={filteredList} />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
