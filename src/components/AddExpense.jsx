import { useState } from "react";
import axios from 'axios';
import '../styles/AddExpense.css';

import React from 'react'

const AddExpense = ({fetchExpenses}) => {
    const [data, setData]= useState({amount: '', category: '', description: '', date: ''});

    const handleChange=(e)=>{
        setData({...data, [e.target.name]: e.target.value});
    }
const handleSubmit =async (e)=>{
    e.preventDefault();
    await  axios.post('http://localhost:3001/expenses', data);
    setData({amount: '', category: '', description: '', date: ''});
    fetchExpenses();

}

  return (
    <form onSubmit={handleSubmit} className="add-expense-form">
        <input name="amount" placeholder="Amount" value = {data.amount} onChange={handleChange} required />
        <input name="category" placeholder="Category" value={data.category} onChange={handleChange} required />
        <input name="description" placeholder="Description" value={data.description} onChange={handleChange} />
        <input type="date" name="date" value={data.date} onChange={handleChange} required/>
        <button type="submit">Add Expense</button>

    </form>
  )
}

export default AddExpense