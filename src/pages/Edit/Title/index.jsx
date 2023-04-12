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
        <S.DateInfo>
          <span>date</span>
          <span>{transDate}</span>
        </S.DateInfo>
        <S.DateInfo>
          <span>weather</span>
          <span>{weatherToIcon(weather)}</span>
        </S.DateInfo>
        <S.DateInfo>
          <span>
            <label htmlFor="mood">mood </label>
          </span>
          <span>
            <select name="mood" id="mood" value={mood} onChange={setMood}>
              <option value="best">😀</option>
              <option value="good">🙂</option>
              <option value="medium">😐</option>
              <option value="bad">🙁</option>
              <option value="worst">😞</option>
            </select>
          </span>
        </S.DateInfo>
      </S.DateBox>
    </S.Container>
  );
};

export default Title;
