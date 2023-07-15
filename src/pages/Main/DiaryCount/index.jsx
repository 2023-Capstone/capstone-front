import { useMemo } from 'react';
import CountGraph from './CountGraph';
import * as S from './index.styles';

const DiaryCount = ({ count }) => {
  const now = new Date();
  const thisYear = now.getFullYear();
  const thisMonth = now.getMonth() + 1;

  const daysOfMonth = useMemo(
    () => getDaysOfMonth(thisYear, thisMonth),
    [thisYear, thisMonth],
  );
  const daysOfYear = useMemo(() => getDaysOfYear(thisYear), [thisYear]);

  return (
    <S.Container>
      <CountGraph name="올해" value={count.year} total={daysOfYear} />
      <CountGraph name="이번달" value={count.month} total={daysOfMonth} />
    </S.Container>
  );
};

const getDaysOfMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

const getDaysOfYear = year => {
  let sum = 0;
  for (let i = 1; i <= 12; i++) sum += getDaysOfMonth(year, i);
  return sum;
};

export default DiaryCount;
