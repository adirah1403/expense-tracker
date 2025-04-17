import React from 'react';
import AddExpense from '../components/AddExpense';
import Filter from '../components/Filter';
import ExpenseList from '../components/ExpenseList';
import { Link } from 'react-router-dom';
import '../styles/ManageExpenses.css';

const ManageExpenses = ({ fetchExpenses, expenses, filters, setFilters }) => {
  return (
    <div className="manage-container">
      <h2>Manage Your Expenses</h2>

      <div className="manage-card-grid">

        <div className="manage-card">
          <h3>Add Expense</h3>
          <p>Quickly log a new expense to stay on top of your spending.</p>
          <AddExpense fetchExpenses={fetchExpenses} />
        </div>

        <div className="manage-card">
          <h3>Filter Expenses</h3>
          <p>Refine your view by category, date, or amount.</p>
          <Filter filters={filters} setFilters={setFilters} />
        </div>

        <div className="manage-card">
          <h3>Expense History</h3>
          <p>Browse all your past expenses in detail.</p>
          <ExpenseList expenses={expenses} />
        </div>

        <div className="manage-card">
          <h3>Analytics</h3>
          <p>Visualize your spending trends with beautiful charts.</p>
          <Link to="/products" className="analytics-link">View Analytics</Link>
        </div>

      </div>
    </div>
  );
};

export default ManageExpenses;
