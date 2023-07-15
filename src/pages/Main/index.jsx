import { Suspense, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BROWSER_PATH } from '@/constants/path';
import { requestRandomDiary, requestDiaryCount } from '@/apis/request/diary';
import useUser from '@/hooks/useUser';
import Title from '@/components/Title';
import RandomDiary from './RandomDiary';
import WritingButton from './WritingButton';
import SmallCalendar from './SmallCalendar';
import DiaryCount from './DiaryCount';
import Skeleton from './Skeleton';
import useFetchQuery from '@/hooks/useFetchQuery';
import * as S from './index.styles';

const Main = () => {
  const { isLogin, info } = useUser();
  const navigate = useNavigate();

  const [randomDiary, setRandomDiary] = useState();
  const [diaryCount, setDiaryCount] = useState();

  useEffect(() => {
    if (!isLogin) {
      navigate(BROWSER_PATH.LANDING);
    }
  }, [isLogin, navigate]);

  const { dataQuery: randomDiaryQuery } = useFetchQuery(
    ['randomDiary'],
    requestRandomDiary,
    1000 * 60 * 60,
  );

  const { dataQuery: diaryCountQuery } = useFetchQuery(
    ['diaryCount'],
    requestDiaryCount,
    1000 * 60 * 5,
  );

  useEffect(() => {
    setRandomDiary(randomDiaryQuery.data);
  }, [randomDiaryQuery]);

  useEffect(() => {
    setDiaryCount(diaryCountQuery.data);
  }, [diaryCountQuery]);

  return (
    <>
      {randomDiary && diaryCount && info ? (
        <S.Container>
          <S.WrapperTitle>
            <Title name="리마이어리" />
            <S.Nickname>반가워요 {info.nickname} 님!</S.Nickname>
          </S.WrapperTitle>
          <S.WrapperContent>
            <RandomDiary content={randomDiary} />
            <S.WrapperSide>
              <WritingButton />
              <SmallCalendar />
              <DiaryCount count={diaryCount} />
            </S.WrapperSide>
          </S.WrapperContent>
        </S.Container>
      ) : (
        <Skeleton />
      )}
    </>
  );
};

export default Main;
