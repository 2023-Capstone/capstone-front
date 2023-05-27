import { IoGrid } from 'react-icons/io5';
import { FaList } from 'react-icons/fa';
import * as S from './index.styles';

const EmotionFilter = ({ filter, changeFilter, isThumbnail, onThumbnail }) => {
  const changeDiaryFilter = filter => () => {
    changeFilter(filter);
  };

  const showThumbnail = isThumbnail => () => {
    onThumbnail(isThumbnail);
  };

  return (
    <S.Container>
      <S.WrapperEmotion>
        <button
          type="button"
          className={filter === 'best' ? 'selected' : ''}
          onClick={changeDiaryFilter('best')}
        >
          최상😁
        </button>
        <button
          type="button"
          className={filter === 'good' ? 'selected' : ''}
          onClick={changeDiaryFilter('good')}
        >
          상😊
        </button>
        <button
          type="button"
          className={filter === 'normal' ? 'selected' : ''}
          onClick={changeDiaryFilter('normal')}
        >
          중🙂
        </button>
        <button
          type="button"
          className={filter === 'bad' ? 'selected' : ''}
          onClick={changeDiaryFilter('bad')}
        >
          하😑
        </button>
        <button
          type="button"
          className={filter === 'worst' ? 'selected' : ''}
          onClick={changeDiaryFilter('worst')}
        >
          최하😩
        </button>
      </S.WrapperEmotion>
      <S.WrapperDisplay>
        <button
          type="button"
          className={isThumbnail ? 'selected' : ''}
          onClick={showThumbnail(true)}
        >
          <IoGrid />
        </button>
        <button
          type="button"
          className={isThumbnail ? '' : 'selected'}
          onClick={showThumbnail(false)}
        >
          <FaList />
        </button>
      </S.WrapperDisplay>
    </S.Container>
  );
};

export default EmotionFilter;
