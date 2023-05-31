import { IoGrid } from 'react-icons/io5';
import { FaList } from 'react-icons/fa';
import * as S from './index.styles';
import { EMOTION } from '@/constants/diary';
import { Link, useSearchParams } from 'react-router-dom';

const FilterDiary = ({ isThumbnail, onThumbnail, LIMIT }) => {
  const [searchParams] = useSearchParams();

  const showThumbnail = isThumbnail => () => {
    onThumbnail(isThumbnail);
  };

  return (
    <S.Container>
      <S.WrapperEmotion>
        <Link
          to={`?t=diary&mood=${EMOTION.BEST}&page=${searchParams.get(
            'page',
          )}&size=${LIMIT}`}
        >
          <button
            type="button"
            className={
              searchParams.get('mood') === EMOTION.BEST ? 'selected' : ''
            }
          >
            최상😁
          </button>
        </Link>
        <Link
          to={`?t=diary&mood=${EMOTION.GOOD}&page=${searchParams.get(
            'page',
          )}&size=${LIMIT}`}
        >
          <button
            type="button"
            className={
              searchParams.get('mood') === EMOTION.GOOD ? 'selected' : ''
            }
          >
            상😊
          </button>
        </Link>
        <Link
          to={`?t=diary&mood=${EMOTION.NORMAL}&page=${searchParams.get(
            'page',
          )}&size=${LIMIT}`}
        >
          <button
            type="button"
            className={
              searchParams.get('mood') === EMOTION.NORMAL ? 'selected' : ''
            }
          >
            중🙂
          </button>
        </Link>
        <Link
          to={`?t=diary&mood=${EMOTION.BAD}&page=${searchParams.get(
            'page',
          )}&size=${LIMIT}`}
        >
          <button
            type="button"
            className={
              searchParams.get('mood') === EMOTION.BAD ? 'selected' : ''
            }
          >
            하😑
          </button>
        </Link>
        <Link
          to={`?t=diary&mood=${EMOTION.WORST}&page=${searchParams.get(
            'page',
          )}&size=${LIMIT}`}
        >
          <button
            type="button"
            className={
              searchParams.get('mood') === EMOTION.WORST ? 'selected' : ''
            }
          >
            최하😩
          </button>
        </Link>
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
