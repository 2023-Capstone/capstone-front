import { EMOTION } from '@/constants/diary';
import { IoGrid } from 'react-icons/io5';
import { FaList } from 'react-icons/fa';
import * as S from './index.styles';

const FilterDiary = ({ LinkTo, isThumbnail, onThumbnail, mood, page }) => {
  const showThumbnail = isThumbnail => () => {
    onThumbnail(isThumbnail);
  };

  return (
    <S.Container>
      <S.WrapperEmotion>
        <LinkTo mood={EMOTION.BEST} page={page}>
          <button
            type="button"
            className={mood === EMOTION.BEST ? 'selected' : ''}
          >
            최상😁
          </button>
        </LinkTo>
        <LinkTo mood={EMOTION.GOOD} page={page}>
          <button
            type="button"
            className={mood === EMOTION.GOOD ? 'selected' : ''}
          >
            상😊
          </button>
        </LinkTo>
        <LinkTo mood={EMOTION.NORMAL} page={page}>
          <button
            type="button"
            className={mood === EMOTION.NORMAL ? 'selected' : ''}
          >
            중🙂
          </button>
        </LinkTo>
        <LinkTo mood={EMOTION.BAD} page={page}>
          <button
            type="button"
            className={mood === EMOTION.BAD ? 'selected' : ''}
          >
            하😑
          </button>
        </LinkTo>
        <LinkTo mood={EMOTION.WORST} page={page}>
          <button
            type="button"
            className={mood === EMOTION.WORST ? 'selected' : ''}
          >
            최하😩
          </button>
        </LinkTo>
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
