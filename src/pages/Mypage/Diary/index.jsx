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
  const [list, setList] = useState([]);
  const [totalDiaryCount, setTotalDiaryCount] = useState({});
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

    setSearchParams({
      t: 'diary',
      mood: searchParams.get('mood'),
      page: 0,
      size: LIMIT,
    });
  }, [searchParams.get('mood')]);

  useEffect(() => {
    toTop();
  }, [searchParams.get('page')]);

  const onThumbnail = isThumbnail => {
    setIsThumbnail(isThumbnail);
  };

  return (
    <S.Container>
      <FilterDiary
        onThumbnail={onThumbnail}
        isThumbnail={isThumbnail}
        LIMIT={LIMIT}
      />
      <S.Wrapper>
        <Post
          list={list}
          totalPage={Math.ceil(
            totalDiaryCount[searchParams.get('mood')] / LIMIT,
          )}
          isThumbnail={isThumbnail}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default Diary;
