import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Expense Tracker</h2>
      <ul className="nav-links">
        <li><NavLink to="/" end className="nav-link">Dashboard</NavLink></li> 
        <li><NavLink to="/manageexpense" className="nav-link">Manage Expenses</NavLink></li> 
        <li><NavLink to="/analytics" className="nav-link">Analytics</NavLink></li>  
      </ul>
    </nav>
  )
}

export default Navbar;
