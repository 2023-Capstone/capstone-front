import { MOOD } from '@/constants/diary';
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
        <LinkTo mood={MOOD.BEST} page={page}>
          <button
            type="button"
            className={mood === MOOD.BEST ? 'selected' : ''}
          >
            최상😁
          </button>
        </LinkTo>
        <LinkTo mood={MOOD.GOOD} page={page}>
          <button
            type="button"
            className={mood === MOOD.GOOD ? 'selected' : ''}
          >
            상😊
          </button>
        </LinkTo>
        <LinkTo mood={MOOD.NORMAL} page={page}>
          <button
            type="button"
            className={mood === MOOD.NORMAL ? 'selected' : ''}
          >
            중🙂
          </button>
        </LinkTo>
        <LinkTo mood={MOOD.BAD} page={page}>
          <button type="button" className={mood === MOOD.BAD ? 'selected' : ''}>
            하😑
          </button>
        </LinkTo>
        <LinkTo mood={MOOD.WORST} page={page}>
          <button
            type="button"
            className={mood === MOOD.WORST ? 'selected' : ''}
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
