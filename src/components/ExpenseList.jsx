import React from 'react';
import '../styles/ExpenseList.css';

const ExpenseList = ({ expenses = [] }) => {
  return (
    <div className="expense-list">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.date}</td>
              <td>Rs. {expense.amount}</td>
              <td>{expense.category}</td>
              <td>{expense.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
