import { useEffect, useState } from "react";
import Statistics from "./statistics/Statistics";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Section from "./section/Section";
import Notification from "./notification/Notification";

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);
  const options = ["good", "neutral", "bad"];

  useEffect(() => {
    const newTotal = good + neutral + bad;
    setTotal(newTotal);
  }, [good, neutral, bad]);

  useEffect(() => {
    const newPositive = total ? Math.round((good / total) * 100) + "%" : "0%";
    setPositive(newPositive);
  }, [good, total]);

  function handleFeedback(option) {
    switch (option) {
      case "good":
        setGood((good) => good + 1);
        break;
      case "neutral":
        setNeutral((neutral) => neutral + 1);
        break;
      case "bad":
        setBad((bad) => bad + 1);
        break;
      default:
        return;
    }
  }

  return (
    <section>
      <Section isFirstLevelTitle title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={total}
            positive={positive}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </section>
  );
}

export default Feedback;
