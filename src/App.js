import { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
import s from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacks = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const totalFeedback = good + neutral + bad;
  const goodPercentage = Math.round((good / totalFeedback) * 100);
  const keys = Object.keys(feedbacks);

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={keys} onLeaveFeedback={handleFeedback} />
      <h2 className={s.title}>Statistics</h2>
      {totalFeedback > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={goodPercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
}
