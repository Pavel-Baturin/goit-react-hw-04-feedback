import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const keys = Object.keys(this.state);
    const totalFeedback = Object.values(this.state).reduce((total, number) => {
      return total + number;
    }, 0);
    const goodPercentage = Math.round((this.state.good / totalFeedback) * 100);
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={keys} onLeaveFeedback={this.handleFeedback} />
        <h2 className={s.title}>Statistics</h2>
        {totalFeedback > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedback}
            positivePercentage={goodPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}

export default App;
