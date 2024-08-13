import css from "../Feedback.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.btnList}>
    {options.map((option) => (
      <li key={option}>
        <button onClick={() => onLeaveFeedback(option)}>{option}</button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;
