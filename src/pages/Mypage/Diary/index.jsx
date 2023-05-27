import { useEffect, useState } from 'react';
import FilterDiary from './FilterDiary';
import {
  requestDiaryByEmotion,
  requestDiaryNumByEmotion,
} from '@/apis/request/diary';
import useError from '@/hooks/useError';
import Post from './Post';
import * as S from './index.styles';

const LIMIT = 10;

const Diary = props => {
  const [filter, setFilter] = useState('best');
  const [list, setList] = useState([]);
  const [diaryNumber, setDairyNumber] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [isThumbnail, setIsThumbnail] = useState(false);

  const handleError = useError();

  useEffect(() => {
    requestDiaryByEmotion({ mood: 'best', page: 0, size: LIMIT })
      .then(data => {
        setList(data);
      })
      .catch(error => {
        alert(handleError(error.code));
      });

    requestDiaryNumByEmotion()
      .then(data => {
        setDairyNumber(data);
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
      <Post
        list={list}
        totalPage={Math.ceil(diaryNumber[filter] / LIMIT)}
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage}
        isThumbnail={isThumbnail}
      />
    </S.Container>
  );
};

export default Diary;
