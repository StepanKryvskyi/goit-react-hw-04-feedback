import css from './Statistics.module.css'
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h2 className={css.statisticsTitle}>Statistics</h2>
      <ul>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total()}</p>
        </li>
        <li>
          <p>Positive feedback: {positivePercentage()}%</p>
        </li>
      </ul>
    </>
  );
};
