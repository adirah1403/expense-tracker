import React from 'react'
import '../styles/ExpenseList.css';


const ExpenseList = ({ expenses = [] }) => {
  return (
    <div>
      <h3>Expense History</h3>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.date} - Rs. {expense.amount} [{expense.category}]: {expense.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExpenseList;
