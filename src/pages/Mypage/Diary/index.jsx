import { useEffect, useState } from 'react';
import {
  requestDiaryByMood,
  requestDiaryNumByMood,
} from '@/apis/request/diary';
import { MOOD } from '@/constants/diary';
import useError from '@/hooks/useError';
import FilterDiary from './FilterDiary';
import Post from './Post';
import * as S from './index.styles';
import { useSearchParams } from 'react-router-dom';
import { LIMIT } from '@/constants/diary';
import { useQuery } from 'react-query';
import useDidMountEffect from '@/hooks/useDidMount';

const Diary = ({ toTop }) => {
  const [list, setList] = useState([]);
  const [totalDiaryCount, setTotalDiaryCount] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [mood, setMood] = useState(
    searchParams.get('mood') ? searchParams.get('mood') : MOOD.BEST,
  );
  const [page, setPage] = useState(
    searchParams.get('page') ? searchParams.get('page') : 0,
  );
  const [isThumbnail, setIsThumbnail] = useState(false);

  const handleError = useError();

  const diaryCountQuery = useQuery(
    ['diaryCount'],
    () => requestDiaryNumByMood(),
    {
      staleTime: 1000 * 60 * 5,
    },
  );

  const listQuery = useQuery(
    ['list', mood, page],
    () => {
      return requestDiaryByMood({
        mood: mood,
        page: page,
        size: LIMIT.PAGE,
      });
    },
    {
      staleTime: 1000 * 60,
    },
  );

  useEffect(() => {
    if (diaryCountQuery.isError) handleError(diaryCountQuery.error);
  }, [diaryCountQuery.isError]);

  useEffect(() => {
    if (listQuery.isError) handleError(listQuery.error);
  }, [listQuery.isError]);

  useEffect(() => {
    if (!searchParams.get('mood') || !searchParams.get('mood'))
      setParams(mood, page);

    setTotalDiaryCount(diaryCountQuery.data);
    setList(listQuery.data);
  }, []);

  useDidMountEffect(() => {
    setMood(searchParams.get('mood'));
    setPage(0);

    setParams(searchParams.get('mood'), 0);
  }, [searchParams.get('mood')]);

  useDidMountEffect(() => {
    setPage(Number(searchParams.get('page')));
    toTop();
  }, [searchParams.get('page')]);

  useDidMountEffect(() => {
    setList(listQuery.data);
  }, [mood, page]);

  const handleThumbnail = isThumbnail => {
    setIsThumbnail(isThumbnail);
  };

  const setParams = (mood, page) => {
    setSearchParams({
      t: 'diary',
      mood,
      page,
      size: LIMIT.PAGE,
    });
  };

  return (
    <S.Container>
      <FilterDiary
        handleThumbnail={handleThumbnail}
        isThumbnail={isThumbnail}
        mood={mood}
        page={page}
      />
      <S.Wrapper>
        <Post
          list={list}
          totalPage={Math.ceil(totalDiaryCount[mood] / LIMIT.PAGE)}
          isThumbnail={isThumbnail}
          mood={mood}
          page={page}
          setParams={setParams}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default Diary;
