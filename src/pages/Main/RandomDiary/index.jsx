import { MOOD_ICON, WEATHER } from '@/constants/diary';
import * as S from './index.styles';

const RandomDiary = ({ content }) => {
  const date = content.date.split('-');

  return (
    <S.Container>
      <p>
        {WEATHER[content.weather]}
        {` ${date[0]}년 ${date[1]}월 ${date[2]}일`}의 일기
      </p>
      <div>
        <h1>{content.title}</h1>
        <h2>{MOOD_ICON[content.mood]}</h2>
      </div>
      <p>{content.content}</p>
    </S.Container>
  );
};

export default RandomDiary;
