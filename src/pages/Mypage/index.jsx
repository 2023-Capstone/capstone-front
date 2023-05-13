import Title from '@/pages/Mypage/Title';
import Filter from '@/pages/Mypage/Filter';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BROWSER_PATH } from '@/constants/path';
import Info from '@/pages/Mypage/Info';
import Diary from '@/pages/Mypage/Diary';
const Mypage = props => {
  const [filter, setFilter] = useState(BROWSER_PATH.MYPAGE.INFO);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`?t=${BROWSER_PATH.MYPAGE.INFO}`);
  }, []);
  const filterChange = boolean => {
    setFilter(boolean);
  };
  return (
    <>
      <Title name="마이페이지" />
      <Filter filter={filter} filterChange={filterChange} />
      {searchParams.get('t') === BROWSER_PATH.MYPAGE.INFO && <Info />}
      {searchParams.get('t') === BROWSER_PATH.MYPAGE.DIARY && <Diary />}
    </>
  );
};

export default Mypage;
