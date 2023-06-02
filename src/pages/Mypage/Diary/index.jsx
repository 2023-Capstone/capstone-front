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

const Diary = ({ toTop }) => {
  const [list, setList] = useState([]);
  const [totalDiaryCount, setTotalDiaryCount] = useState({});
  const [mood, setMood] = useState(MOOD.BEST);
  const [page, setPage] = useState(0);
  const [isThumbnail, setIsThumbnail] = useState(false);

  const handleError = useError();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    requestDiaryNumByMood()
      .then(data => {
        setTotalDiaryCount(data);
      })
      .catch(error => {
        alert(handleError(error.code));
      });

    if (!searchParams.get('mood') || !searchParams.get('page')) {
      setParams(MOOD.BEST, 0);
      return;
    }
  }, []);

  useEffect(() => {
    if (!searchParams.get('mood')) return;

    requestDiaryByMood({
      mood: searchParams.get('mood'),
      page: 0,
      size: LIMIT.PAGE,
    })
      .then(data => {
        setList(data);
        setMood(searchParams.get('mood'));
        setPage(0);
      })
      .catch(error => {
        alert(handleError(error.code));
      });
  }, [searchParams.get('mood')]);

  useEffect(() => {
    if (!searchParams.get('page')) return;

    requestDiaryByMood({
      mood: searchParams.get('mood'),
      page: searchParams.get('page'),
      size: LIMIT.PAGE,
    })
      .then(data => {
        setList(data);
        toTop();
        setPage(searchParams.get('page'));
      })
      .catch(error => {
        alert(handleError(error.code));
      });
  }, [searchParams.get('page')]);

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
