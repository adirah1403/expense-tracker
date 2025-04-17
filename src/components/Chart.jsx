import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import '../styles/Chart.css';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const Chart = ({ expenses = [] }) => {
  const categoryTotals = {};
  expenses.forEach((exp) => {
    categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + parseFloat(exp.amount);
  });

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        label: 'Expenses',
        data: Object.values(categoryTotals),
        backgroundColor: 'orange',
      },
    ],
  };

  return (
    <div className="chart-container">
      <Bar data={data} />
    </div>
  );
};

export default Chart;
