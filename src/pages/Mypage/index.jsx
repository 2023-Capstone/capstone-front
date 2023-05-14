import Title from '@/pages/Mypage/Title';
import Filter from '@/pages/Mypage/Filter';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BROWSER_PATH } from '@/constants/path';
import Info from '@/pages/Mypage/Info';
import Diary from '@/pages/Mypage/Diary';
const Mypage = props => {
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get('t'));
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`?t=${BROWSER_PATH.MYPAGE.INFO}`);
  }, []);

  useEffect(() => {
    switch (searchParams.get('t')) {
      case BROWSER_PATH.MYPAGE.INFO:
        setFilter(BROWSER_PATH.MYPAGE.INFO);
        break;

      case BROWSER_PATH.MYPAGE.DIARY:
        setFilter(BROWSER_PATH.MYPAGE.DIARY);
        break;

      default:
        setFilter(BROWSER_PATH.MYPAGE.INFO);
        break;
    }
  }, [searchParams.get('t')]);

  const filterChange = boolean => {
    setFilter(boolean);
  };
  return (
    <>
      <Title name="마이페이지" />
      <Filter filter={filter} filterChange={filterChange} />
      {filter === BROWSER_PATH.MYPAGE.INFO && <Info />}
      {filter === BROWSER_PATH.MYPAGE.DIARY && <Diary />}
    </>
  );
};

export default Mypage;
