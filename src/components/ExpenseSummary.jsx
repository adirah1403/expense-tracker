import React from 'react'
import '../styles/ExpenseSummary.css';

const ExpenseSummary = ({ expenses = [] }) => {
  const total = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0);

  return (
    <h3>Total Spent: Rs. {total.toFixed(2)}</h3>
  );
};

export default ExpenseSummary;
