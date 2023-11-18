import { Item } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <Item>good :{good}</Item>
      <Item>neutral:{neutral}</Item>
      <Item>bad:{bad}</Item>
      <Item>total:{total}</Item>
      <Item>positive feedback: {positivePercentage}%</Item>
    </div>
  );
};
