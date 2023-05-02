import React from 'react';
import { BROWSER_PATH } from '../../../constants/path';
import { Link } from 'react-router-dom';
import * as S from './index.styles';
const Filter = ({ filters, filter, onFilterChange }) => {
  return (
    <S.Container>
      <li>
        <S.Button
          onClick={() => {
            onFilterChange(filters[0]);
          }}
          className={filter === filters[0] ? 'selected' : ''}
        >
          <Link to={BROWSER_PATH.MYPAGE.MYINFO}>개인 정보</Link>
        </S.Button>
      </li>
      <li>
        <S.Button
          onClick={() => {
            onFilterChange(filters[1]);
          }}
          className={filter === filters[1] ? 'selected' : ''}
        >
          <Link to={BROWSER_PATH.MYPAGE.DIARIESBYEMOTION}>
            기분 별 일기 모아보기
          </Link>
        </S.Button>
      </li>
    </S.Container>
  );
};

export default Filter;
