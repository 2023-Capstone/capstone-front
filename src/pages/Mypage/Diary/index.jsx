import { useEffect, useState } from 'react';
import EmotionFilter from './EmotionFilter';
import {
  requestDiaryByEmotion,
  requestDiaryNumByEmotion,
} from '@/apis/request/diary';
import useError from '@/hooks/useError';
import Post from './Post';

const LIMIT = 10;

const Diary = props => {
  const [filter, setFilter] = useState('best');
  const [list, setList] = useState([]);
  const [diaryNumber, setDairyNumber] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
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

  const changeFilter = filter => {
    setFilter(filter);
  };

  const changeCurrentPage = page => {
    setCurrentPage(page);
  };
  return (
    <>
      <EmotionFilter filter={filter} changeFilter={changeFilter} />
      <Post
        list={list}
        pageNumber={Math.ceil(diaryNumber[filter] / LIMIT)}
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage}
      />
    </>
  );
};

export default Diary;
