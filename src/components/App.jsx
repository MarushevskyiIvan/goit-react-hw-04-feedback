import { useState } from 'react';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';

export const App = () => {
  const [good, setGodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const addFeedback = name => {
    switch (name) {
      case 'good':
        setGodFeedback(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutralFeedback(prevState => prevState + 1);
        break;
      case 'bad':
        setBadFeedback(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const total = countTotalFeedback();

  return (
    <>
      <Section title="please leave the feedback" />
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        addFeedback={addFeedback}
      />
      <Section />

      <Section title="statistics" />
      {total === 0 ? (
        <Notification message={'there is no feedback'} />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      )}
      <Section />
    </>
  );
};
