const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map((option) => (
      <li key={option}>
        <button onClick={() => onLeaveFeedback(option)}>{option}</button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;
