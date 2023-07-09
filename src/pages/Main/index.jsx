import { Suspense, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { BROWSER_PATH } from '@/constants/path';
import { requestRandomDiary } from '@/apis/request/diary';
import useUser from '@/hooks/useUser';
import useError from '@/hooks/useError';
import Title from '@/components/Title';
import RandomDiary from './RandomDiary';
import WritingButton from './WritingButton';
import SmallCalendar from './SmallCalendar';
import DiaryCount from './DiaryCount';
import * as S from './index.styles';
import { requestDiaryCount } from '../../apis/request/diary';
import Skeleton from './Skeleton';

const Main = () => {
  const { isLogin } = useUser();
  const navigate = useNavigate();
  const handleError = useError();

  const [randomDiary, setRandomDiary] = useState();
  const [diaryCount, setDiaryCount] = useState();

  // useEffect(() => {
  //   if (!isLogin) {
  //     navigate(BROWSER_PATH.LANDING);
  //   }
  // }, [isLogin, navigate]);

  useEffect(() => {
    requestRandomDiary()
      .then(data => setRandomDiary(data))
      .catch(err => handleError(err.code));

    requestDiaryCount()
      .then(data => setDiaryCount(data))
      .catch(err => handleError(err.code));
  }, []);

  return (
    <>
      {randomDiary && diaryCount ? (
        <S.Container>
          <section>
            <Title name="리마이어리" />
            {/* 유저 닉네임으로 변환 필요함 */}
            <S.Nickname>반가워요 rewrite 님!</S.Nickname>
          </section>
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
