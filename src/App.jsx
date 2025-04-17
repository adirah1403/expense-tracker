import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ManageExpenses from './pages/ManageExpenses';
import Analytics from './pages/Analytics';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filters, setFilters] = useState({ start: '', end: '', category: '' });
  const API = 'http://localhost:3001/expenses';

  const fetchExpenses = async () => {
    try {
      const res = await axios.get(API);
      let filtered = res.data;
      if (filters.category) filtered = filtered.filter(e => e.category === filters.category);
      if (filters.start) filtered = filtered.filter(e => e.date >= filters.start);
      if (filters.end) filtered = filtered.filter(e => e.date <= filters.end);
      setExpenses(filtered);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, [filters]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/manageexpense" element={<ManageExpenses fetchExpenses={fetchExpenses} expenses={expenses} filters={filters} setFilters={setFilters} />} />
        <Route path="/analytics" element={<Analytics expenses={expenses} />} />
      </Routes>
    </Router>
  );
}

export default App;