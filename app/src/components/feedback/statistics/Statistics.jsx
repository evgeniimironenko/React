const Statistics = ({ good, neutral, bad, totalFeedback, positive }) => (
  <ul>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {totalFeedback}</li>
    <li>Positive: {positive}</li>
  </ul>
);

export default Statistics;
