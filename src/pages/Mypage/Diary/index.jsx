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
import { useNavigate, useSearchParams } from 'react-router-dom';

const LIMIT = 10;

const Diary = ({ toTop }) => {
  const [filter, setFilter] = useState(EMOTION.BEST);
  const [list, setList] = useState([]);
  const [totalDiaryCount, setTotalDiaryCount] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [isThumbnail, setIsThumbnail] = useState(false);
  const handleError = useError();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      t: 'diary',
      mood: EMOTION.BEST,
      page: 0,
      size: LIMIT,
    });
    requestDiaryNumByEmotion()
      .then(data => {
        setTotalDiaryCount(data);
      })
      .catch(error => {
        alert(handleError(error.code));
      });
  }, []);

  useEffect(() => {
    if (!searchParams.get('mood')) return;

    requestDiaryByEmotion({
      mood: searchParams.get('mood'),
      page: searchParams.get('page'),
      size: LIMIT,
    })
      .then(data => {
        setList(data);
      })
      .catch(error => {
        alert(handleError(error.code));
      });
  }, [searchParams.get('mood'), searchParams.get('page')]);

  useEffect(() => {
    setSearchParams({
      t: 'diary',
      mood: filter,
      page: currentPage,
      size: LIMIT,
    });
  }, [filter, currentPage]);

  useEffect(() => {
    setCurrentPage(0);
  }, [searchParams.get('mood')]);

  useEffect(() => {
    toTop();
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
