import { useEffect, useState } from 'react';

import * as S from './index.styles';

import { weatherToIcon, getDay } from '@/utils/weather';

const Title = ({ title, setTitle, date, weather, mood, setMood }) => {
  const [transDate, setTransDate] = useState('');

  useEffect(() => {
    if (date) {
      setTransDate(
        `${date.getFullYear()}/${
          date.getMonth() + 1
        }/${date.getDate()} (${getDay()})`,
      );
    }
  }, [date]);

  return (
    <S.Container>
      <S.Input value={title} onChange={setTitle} />
      <S.DateBox>
        <p>date: {transDate}</p>
        <p>weather: {weatherToIcon(weather)}</p>
        <p>
          <label htmlFor="mood">mood: </label>
          <select name="mood" id="mood" value={mood} onChange={setMood}>
            <option value="best">😀</option>
            <option value="good">🙂</option>
            <option value="medium">😐</option>
            <option value="bad">🙁</option>
            <option value="worst">😞</option>
          </select>
        </p>
      </S.DateBox>
    </S.Container>
  );
};

export default Title;
