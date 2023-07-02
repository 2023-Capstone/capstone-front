import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { BROWSER_PATH } from '@/constants/path';
import useUser from '@/hooks/useUser';
import useError from '@/hooks/useError';
import Title from '@/components/Title';
import RandomDiary from './RandomDiary';
import WritingButton from './WritingButton';
import SmallCalendar from './SmallCalendar';
import DiaryCount from './DiaryCount';
import * as S from './index.styles';
import { requestRandomDiary } from '@/apis/request/diary';

const Main = () => {
  const { isLogin } = useUser();
  const navigate = useNavigate();
  const handleError = useError();

  const [randomDiary, setRandomDiary] = useState();

  useEffect(() => {
    if (!isLogin) {
      navigate(BROWSER_PATH.LANDING);
    }
  }, [isLogin, navigate]);

  useEffect(() => {
    requestRandomDiary()
      .then(data => setRandomDiary(data))
      .catch(err => handleError(err.code));
  }, []);

  return (
    <S.Container>
      <section>
        <Title name="리마이어리" />
        {/* 유저 닉네임으로 변환 필요함 */}
        <S.Nickname>반가워요 rewrite 님!</S.Nickname>
      </section>
      <S.WrapperContent>
        {randomDiary && <RandomDiary content={randomDiary} />}
        <S.WrapperSide>
          <WritingButton />
          <SmallCalendar />
          <DiaryCount />
        </S.WrapperSide>
      </S.WrapperContent>
    </S.Container>
  );
};

export default Main;
