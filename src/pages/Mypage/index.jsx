import Title from './Title';
import Filter from './Filter';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { BROWSER_PATH } from '../../constants/path';
const Mypage = props => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(BROWSER_PATH.MYPAGE.MYINFO);
  }, []);
  return (
    <>
      <Title name={'마이페이지'} />
      <Filter />
      <Outlet />
    </>
  );
};

export default Mypage;
