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

const LIMIT = 10;

const Diary = ({ toTop }) => {
  const [filter, setFilter] = useState(EMOTION.BEST);
  const [list, setList] = useState([]);
  const [totalDiaryCount, setTotalDiaryCount] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [isThumbnail, setIsThumbnail] = useState(false);
  const handleError = useError();

  useEffect(() => {
    requestDiaryByEmotion({ mood: EMOTION.BEST, page: 0, size: LIMIT })
      .then(data => {
        setList(data);
      })
      .catch(error => {
        alert(handleError(error.code));
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
    requestDiaryByEmotion({ mood: filter, page: currentPage, size: LIMIT })
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
