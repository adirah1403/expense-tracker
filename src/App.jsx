import './App.css'
import {useState, useEffect} from 'react';
import axios from 'axios';

import AddExpense from './components/AddExpense';
import Chart from './components/Chart';
import Filter from './components/Filter';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';


function App() {
  const [expenses,setExpenses]=useState([]);
  const[ filters, setFilters] = useState({start: '', end:'', category:''});
  const API= 'http://localhost:3001/expenses';

  const fetchExpenses= async() =>{
    try{
      const res = await axios.get(API);
      console.log(res.data);
      let filtered = res.data;
      if (filters.category) {
        filtered = filtered.filter(e => e.category === filters.category);
      }
      if (filters.start) {
        filtered = filtered.filter(e => e.date >= filters.start);
      }
      if (filters.end) {
        filtered = filtered.filter(e => e.date <= filters.end);
      }
      setExpenses(filtered);
    }
    catch(error){
      console.log("Error: "+error)
    }
  }
  useEffect(()=>{
    fetchExpenses();
  },[filters]);

  return(
    <div className="container">
      <h1>Expense Tracker</h1>
      <AddExpense fetchExpenses={fetchExpenses}/>
      <Filter filters={filters} setFilters={setFilters}/>
      <ExpenseList expenses={expenses}/>
      <ExpenseSummary expenses={expenses}/>
      <Chart expenses={expenses}/>
    </div>
  )
}

export default App
