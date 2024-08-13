import { Component } from "react";
import Statistics from "./statistics/Statistics";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Section from "./section/Section";
import Notification from "./notification/Notification";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (type) => {
    this.setState((prevState) => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) + "%" : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    const options = ["good", "neutral", "bad"];
    return (
      <section>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={totalFeedback}
              positive={positive}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </section>
    );
  }
}

export default Feedback;
