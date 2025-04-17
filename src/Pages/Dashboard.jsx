import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';
import a3img from './a3.png';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <img src={a3img} alt="expense" style={{height:'200px'}}/>
      <div className="card-grid">
        <Link to="/manageexpense" className="dashboard-card">
          <h2>Manage Expenses</h2>
          <p>Add, Search, and track all your spending in one place.</p>
        </Link>
        <Link to="/analytics" className="dashboard-card">
          <h2>Analytics</h2>
          <p>Visualize your spending habits with dynamic charts.</p>
        </Link>
        <Link to="/manageexpense" className="dashboard-card">
          <h2>Expense History</h2>
          <p>Review your past expenses and stay financially aware.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
