import { IoGrid } from 'react-icons/io5';
import { FaList } from 'react-icons/fa';
import * as S from './index.styles';

const FilterDiary = ({
  filter,
  changeFilter,
  isThumbnail,
  onThumbnail,
  changeCurrentPage,
}) => {
  const changeEmotionFilter = newfilter => () => {
    if (newfilter === filter) {
      changeCurrentPage(0);
      return;
    }
    changeFilter(newfilter);
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
          onClick={changeEmotionFilter('best')}
        >
          최상😁
        </button>
        <button
          type="button"
          className={filter === 'good' ? 'selected' : ''}
          onClick={changeEmotionFilter('good')}
        >
          상😊
        </button>
        <button
          type="button"
          className={filter === 'normal' ? 'selected' : ''}
          onClick={changeEmotionFilter('normal')}
        >
          중🙂
        </button>
        <button
          type="button"
          className={filter === 'bad' ? 'selected' : ''}
          onClick={changeEmotionFilter('bad')}
        >
          하😑
        </button>
        <button
          type="button"
          className={filter === 'worst' ? 'selected' : ''}
          onClick={changeEmotionFilter('worst')}
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

export default FilterDiary;
