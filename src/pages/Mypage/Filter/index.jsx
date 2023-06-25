import { Link } from 'react-router-dom';
import * as S from './index.styles';
import { BROWSER_PATH } from '@/constants/path';
import { MOOD } from '@/constants/diary';
import LinkToDiary from '@/pages/Mypage/LinkToDiary';

const Filter = ({ filter }) => {
  const { INFO, DIARY } = BROWSER_PATH.MYPAGE;

  return (
    <S.Container>
      <li>
        <Link to={`?t=${INFO}`}>
          <S.Button type="button" className={filter === INFO ? 'selected' : ''}>
            개인 정보
          </S.Button>
        </Link>
      </li>
      <li>
        <LinkToDiary mood={MOOD.BEST} page={0}>
          <S.Button
            type="button"
            className={filter === DIARY ? 'selected' : ''}
          >
            기분 별 일기 모아보기
          </S.Button>
        </LinkToDiary>
      </li>
    </S.Container>
  );
};

export default Filter;
