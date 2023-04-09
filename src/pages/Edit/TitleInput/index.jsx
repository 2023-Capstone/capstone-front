import { useEffect, useState } from 'react';

import * as S from './index.styles';

import { weatherToIcon } from '@/utils/weatherToIcon';

const TitleInput = ({ title, setTitle, date, weather, mood, setMood }) => {
  const [transDate, setTransDate] = useState('');
  const [iconWeather, setIconWeather] = useState(null);

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
      setIconWeather(() => weatherToIcon(weather));
    }
  }, [weather]);
  return (
    <S.Container>
      <S.Input value={title} onChange={setTitle} />
      <S.DateBox>
        <p>date: {transDate}</p>
        <p>weather: {weather ? iconWeather : '업데이트 중'}</p>
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

export default TitleInput;
