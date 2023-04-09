import { useEffect, useState } from 'react';

import * as S from './index.styles';

const TitleInput = ({ date, weather, mood, setMood }) => {
  const [transDate, setTransDate] = useState('가져오는 중');

  useEffect(() => {
    if (date) {
      setTransDate(
        () =>
          `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} (${[
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
          ].at(date.getDay())})`,
      );
    }
  }, [date]);

  useEffect(() => {
    if (weather) {
      weaterToIcon(weather);
    }
  }, [weather]);
  return (
    <S.Container>
      <S.Input />
      <S.DateBox>
        <p>date: {transDate}</p>
        <p>weather: {weather ? weather : '업데이트 중'}</p>
        <p>
          <label htmlFor="mood">mood: </label>
          <select name="mood" id="mood">
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

export default TitleInput;
