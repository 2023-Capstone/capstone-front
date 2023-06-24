import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  requestDiaryByMood,
  requestDiaryNumByMood,
} from '@/apis/request/diary';
import useMount from '@/hooks/useMount';
import { MOOD } from '@/constants/diary';
import { LIMIT } from '@/constants/diary';
import { BROWSER_PATH } from '@/constants/path';
import FilterDiary from './FilterDiary';
import Post from './Post';
import * as S from './index.styles';
import useFetchQuery from '../../../hooks/useFetchQuery';

const Diary = ({ toTop }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [mood, setMood] = useState(
    searchParams.get('mood') ? searchParams.get('mood') : MOOD.BEST,
  );
  const [page, setPage] = useState(
    searchParams.get('page') ? searchParams.get('page') : 0,
  );
  const [isThumbnail, setIsThumbnail] = useState(false);

  const { data: totalDiaryCount } = useFetchQuery(
    {},
    ['diaryCount'],
    requestDiaryNumByMood,
    1000 * 60 * 5,
  );

  const { data: list } = useFetchQuery(
    [],
    ['list', mood, page],
    () => {
      return requestDiaryByMood({
        mood: mood,
        page: page,
        size: LIMIT.PAGE,
      });
    },
    1000 * 60 * 5,
  );

  useEffect(() => {
    if (!searchParams.get('mood') || !searchParams.get('page'))
      setParams(mood, page);
  }, []);

  useMount(() => {
    setMood(searchParams.get('mood'));
    setPage(0);
    setParams(searchParams.get('mood'), 0);
  }, [searchParams.get('mood')]);

  useMount(() => {
    setPage(Number(searchParams.get('page')));
    toTop();
  }, [searchParams.get('page')]);

  const handleThumbnail = isThumbnail => {
    setIsThumbnail(isThumbnail);
  };

  const setParams = (mood, page) => {
    setSearchParams({
      t: BROWSER_PATH.MYPAGE.DIARY,
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
          page={Number(page)}
          setParams={setParams}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default Diary;
