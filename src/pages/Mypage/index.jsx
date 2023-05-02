import Title from './Title';
import Filter from './Filter';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BROWSER_PATH } from '../../constants/path';
const filters = ['MYINFO', 'DIARIESBYEMOTION'];
const Mypage = props => {
  const [filter, setFilter] = useState(filters[0]);
  const navigate = useNavigate();
  useEffect(() => {
    navigate(BROWSER_PATH.MYPAGE.MYINFO);
  }, []);
  return (
    <>
      <Title name={'마이페이지'} />
      <Filter filters={filters} filter={filter} onFilterChange={setFilter} />
      <Outlet />
    </>
  );
};

export default Mypage;
