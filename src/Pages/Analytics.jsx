import ExpenseSummary from '../components/ExpenseSummary';
import Chart from '../components/Chart';

const Analytics = ({ expenses }) => {
  return (
    <div className="container">
      <ExpenseSummary expenses={expenses} />
      <Chart expenses={expenses} />
    </div>
  );
};

export default Analytics;
