import { useEffect, useRef, useState } from 'react';
import {
  requestDiaryByEmotion,
  requestDiaryNumByEmotion,
} from '@/apis/request/diary';
import { EMOTION } from '@/constants/diary';
import useError from '@/hooks/useError';
import FilterDiary from './FilterDiary';
import Post from './Post';
import * as S from './index.styles';
import { useSearchParams } from 'react-router-dom';

const LIMIT = 10;

const Diary = ({ toTop }) => {
  const [filter, setFilter] = useState(EMOTION.BEST);
  const [list, setList] = useState([]);
  const [totalDiaryCount, setTotalDiaryCount] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [isThumbnail, setIsThumbnail] = useState(false);
  const handleError = useError();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    requestDiaryNumByEmotion()
      .then(data => {
        setTotalDiaryCount(data);
      })
      .catch(error => {
        alert(handleError(error.code));
      });
  }, []);

  useEffect(() => {
    setSearchParams({
      t: 'diary',
      mood: filter,
      page: currentPage,
      size: LIMIT,
    });
    requestDiaryByEmotion()
      .then(data => {
        setList(data);
      })
      .catch(error => {
        alert(handleError(error.code));
      });
  }, [filter, currentPage]);

  useEffect(() => {
    setCurrentPage(0);
  }, [filter]);

  useEffect(() => {
    toTop();
  }, [currentPage]);

  useEffect(() => {
    if (!searchParams.get('mood')) return;

    setFilter(searchParams.get('mood'));
  }, [searchParams.get('mood')]);

  useEffect(() => {
    if (!searchParams.get('page')) return;

    setCurrentPage(searchParams.get('page'));
  }, [searchParams.get('page')]);

  const changeFilter = filter => {
    setFilter(filter);
  };

  const changeCurrentPage = page => {
    setCurrentPage(page);
  };

  const onThumbnail = isThumbnail => {
    setIsThumbnail(isThumbnail);
  };

  return (
    <S.Container>
      <FilterDiary
        filter={filter}
        changeFilter={changeFilter}
        onThumbnail={onThumbnail}
        isThumbnail={isThumbnail}
        changeCurrentPage={changeCurrentPage}
      />
      <S.Wrapper>
        <Post
          list={list}
          totalPage={Math.ceil(totalDiaryCount[filter] / LIMIT)}
          currentPage={currentPage}
          changeCurrentPage={changeCurrentPage}
          isThumbnail={isThumbnail}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default Diary;
