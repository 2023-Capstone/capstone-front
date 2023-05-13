import { Link } from 'react-router-dom';
import * as S from './index.styles';
import { BROWSER_PATH } from '@/constants/path';
const Filter = ({ filter, filterChange }) => {
  const changeFilterToInfo = () => {
    filterChange(BROWSER_PATH.MYPAGE.INFO);
  };
  const changeFilterToDiary = () => {
    filterChange(BROWSER_PATH.MYPAGE.DIARY);
  };
  return (
    <S.Container>
      <li>
        <S.Button
          onClick={changeFilterToInfo}
          className={filter === BROWSER_PATH.MYPAGE.INFO ? 'selected' : ''}
        >
          <Link to={`?t=${BROWSER_PATH.MYPAGE.INFO}`}>개인 정보</Link>
        </S.Button>
      </li>
      <li>
        <S.Button
          onClick={changeFilterToDiary}
          className={filter === BROWSER_PATH.MYPAGE.DIARY ? 'selected' : ''}
        >
          <Link to={`?t=${BROWSER_PATH.MYPAGE.DIARY}`}>
            기분 별 일기 모아보기
          </Link>
        </S.Button>
      </li>
    </S.Container>
  );
};

export default Filter;
