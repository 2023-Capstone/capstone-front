import { useEffect, useState } from 'react';
import {
  requestDiaryByEmotion,
  requestDiaryNumByEmotion,
} from '@/apis/request/diary';
import { EMOTION } from '@/constants/diary';
import useError from '@/hooks/useError';
import FilterDiary from './FilterDiary';
import Post from './Post';
import * as S from './index.styles';
import { Link, useSearchParams } from 'react-router-dom';

const LIMIT = 10;

const Diary = ({ toTop }) => {
  const [list, setList] = useState([]);
  const [totalDiaryCount, setTotalDiaryCount] = useState({});
  const [mood, setMood] = useState(EMOTION.BEST);
  const [page, setPage] = useState(0);
  const [isThumbnail, setIsThumbnail] = useState(false);
  const handleError = useError();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setParams(EMOTION.BEST, 0);

    requestDiaryNumByEmotion()
      .then(data => {
        setTotalDiaryCount(data);
      })
      .catch(error => {
        alert(handleError(error.code));
      });
  }, []);

  useEffect(() => {
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
    if (!searchParams.get('mood')) return;

    setMood(searchParams.get('mood'));
    setParams(searchParams.get('mood'), 0);
  }, [searchParams.get('mood')]);

  useEffect(() => {
    toTop();

    setPage(searchParams.get('page'));
  }, [searchParams.get('page')]);

  const onThumbnail = isThumbnail => {
    setIsThumbnail(isThumbnail);
  };

  const setParams = (mood, page) => {
    setSearchParams({
      t: 'diary',
      mood,
      page,
      size: LIMIT,
    });
  };

  const LinkTo = ({ children, mood, page }) => {
    return (
      <Link to={`?t=diary&mood=${mood}&page=${page}&size=${LIMIT}`}>
        {children}
      </Link>
    );
  };

  return (
    <S.Container>
      <FilterDiary
        LinkTo={LinkTo}
        onThumbnail={onThumbnail}
        isThumbnail={isThumbnail}
        LIMIT={LIMIT}
        mood={mood}
        page={page}
      />
      <S.Wrapper>
        <Post
          list={list}
          totalPage={Math.ceil(totalDiaryCount[mood] / LIMIT)}
          isThumbnail={isThumbnail}
          mood={mood}
          page={page}
          setParams={setParams}
          LinkTo={LinkTo}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default Diary;
