import React from 'react';
import '../styles/Filter.css'; // Import the styles

const Filter = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="filter-container">
      <h3>Filter Expenses</h3>
      <form>
        <input
          type="date"
          name="start"
          value={filters.start}
          onChange={handleChange}
          placeholder="Start Date"
        />
        <input
          type="date"
          name="end"
          value={filters.end}
          onChange={handleChange}
          placeholder="End Date"
        />
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Utilities">Utilities</option>
        </select>
        <button type="button" onClick={() => setFilters({ start: '', end: '', category: '' })}>
          Reset Filters
        </button>
      </form>
    </div>
  );
};

export default Filter;
