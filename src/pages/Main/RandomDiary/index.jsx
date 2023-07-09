import { MOOD_ICON, WEATHER } from '@/constants/diary';
import * as S from './index.styles';

const RandomDiary = ({ content }) => {
  const date = content.date.split('-');

  return (
    <S.Container>
      <S.WrapperDateInfo>
        <S.TextBlack>{WEATHER[content.weather]}</S.TextBlack>
        <S.TextGreen>{` ${date[0]}년 ${date[1]}월 ${date[2]}일`}</S.TextGreen>
        <S.TextBlack>의 일기</S.TextBlack>
      </S.WrapperDateInfo>
      <S.WrapperTitle>
        <S.Title>{content.title}</S.Title>
        <S.WrapperIcon>
          <S.Triangle />
          <S.Icon>{MOOD_ICON[content.mood]}</S.Icon>
        </S.WrapperIcon>
      </S.WrapperTitle>
      <S.WrapperContent>
        <S.Content>{content.content}</S.Content>
      </S.WrapperContent>
    </S.Container>
  );
};

export default RandomDiary;
