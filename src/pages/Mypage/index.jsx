import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useRef, Suspense } from 'react';
import { BROWSER_PATH } from '@/constants/path';
import Title from './Title';
import Filter from './Filter';
import Info from './Info';
import Diary from './Diary';
import * as S from './index.styles';

const Mypage = props => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { INFO, DIARY } = BROWSER_PATH.MYPAGE;
  const topRef = useRef();
  const location = useLocation();

  useEffect(() => {
    if (!location.search) setSearchParams({ t: INFO });
  }, []);

  const toTop = () => {
    topRef.current.scrollIntoView();
  };

  return (
    <S.Container>
      <div ref={topRef}></div>
      <Title name="마이페이지" />
      {searchParams.get('t') && <Filter filter={searchParams.get('t')} />}
      <S.Wrapper>
        {searchParams.get('t') && searchParams.get('t') === DIARY ? (
          <Suspense fallback={<>loading...</>}>
            <Diary toTop={toTop} />
          </Suspense>
        ) : (
          <Info />
        )}
      </S.Wrapper>
    </S.Container>
  );
};

export default Mypage;
