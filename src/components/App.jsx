import React, { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification'

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = feedbackType => {
    if (feedbackType === 'good') {
      setGood(good + 1);
    } else if (feedbackType === 'neutral') {
      setNeutral(neutral + 1);
    } else if (feedbackType === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((100 * good) / total);
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleFeedback}
      />
      {good || neutral || bad ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
}

export default App;

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedback = e => {
//     this.setState(prevState => {
//       return {
//         [e.target.id]: prevState[e.target.id] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const counterPercentage = Math.round(
//       (100 * this.state.good) / this.countTotalFeedback()
//     );
//     if (isNaN(counterPercentage)) {
//       return 0;
//     }
//     return counterPercentage;
//   };
//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={['good', 'neutral', 'bad']}
//           onLeaveFeedback={this.handleFeedback}
//         ></FeedbackOptions>
//         {good || neutral || bad ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback}
//             positivePercentage={this.countPositiveFeedbackPercentage}
//           ></Statistics>
//         ) : (
//           <Notification message="There is no feedback"></Notification>
//         )}
//       </Section>
//     );
//   }
// }
