import { IoGrid } from 'react-icons/io5';
import { FaList } from 'react-icons/fa';
import * as S from './index.styles';
import { EMOTION } from '@/constants/diary';

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
          className={filter === EMOTION.BEST ? 'selected' : ''}
          onClick={changeEmotionFilter(EMOTION.BEST)}
        >
          최상😁
        </button>
        <button
          type="button"
          className={filter === EMOTION.GOOD ? 'selected' : ''}
          onClick={changeEmotionFilter(EMOTION.GOOD)}
        >
          상😊
        </button>
        <button
          type="button"
          className={filter === EMOTION.NORMAL ? 'selected' : ''}
          onClick={changeEmotionFilter(EMOTION.NORMAL)}
        >
          중🙂
        </button>
        <button
          type="button"
          className={filter === EMOTION.BAD ? 'selected' : ''}
          onClick={changeEmotionFilter(EMOTION.BAD)}
        >
          하😑
        </button>
        <button
          type="button"
          className={filter === EMOTION.WORST ? 'selected' : ''}
          onClick={changeEmotionFilter(EMOTION.WORST)}
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
