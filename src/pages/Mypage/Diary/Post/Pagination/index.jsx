import { useEffect, useState } from 'react';
import * as S from './index.styles';
import { Link, useSearchParams } from 'react-router-dom';

const LIMIT = 10;

const Pagination = ({ totalPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [totalButtonIndex, setTotalButtonIndex] = useState(
    Math.floor(totalPage / LIMIT),
  );
  const [currentButtonIndex, setCurrentButtonIndex] = useState(0);

  useEffect(() => {
    setTotalButtonIndex(Math.ceil(totalPage / LIMIT) - 1);
    setCurrentButtonIndex(0);
  }, [totalPage]);

  useEffect(() => {
    setCurrentButtonIndex(Math.floor(Number(searchParams.get('page')) / LIMIT));
  }, [searchParams.get('page')]);

  const handlePrev = () => {
    if (currentButtonIndex <= 0) return;

    const prevIdx = currentButtonIndex - 1;

    setCurrentButtonIndex(prevIdx);
    setSearchParams({
      t: 'diary',
      mood: searchParams.get('mood'),
      page: 10 * prevIdx,
      size: LIMIT,
    });
  };

  const handleNext = () => {
    if (currentButtonIndex >= totalButtonIndex) return;

    const nextIdx = currentButtonIndex + 1;

    setCurrentButtonIndex(nextIdx);
    setSearchParams({
      t: 'diary',
      mood: searchParams.get('mood'),
      page: 10 * nextIdx,
      size: LIMIT,
    });
  };

  return (
    <S.Container>
      <li>
        <S.Button onClick={handlePrev}>&lt;&lt;</S.Button>
      </li>
      {Array(
        getButtonCountPerPage(totalButtonIndex, currentButtonIndex, totalPage),
      )
        .fill()
        .map((_, idx) => (
          <li key={idx}>
            <Link
              to={`?t=diary&mood=${searchParams.get('mood')}&page=${getBtnIdx(
                idx,
                currentButtonIndex,
              )}&size=${LIMIT}`}
            >
              <S.Button
                className={
                  Number(searchParams.get('page')) ===
                  getBtnIdx(idx, currentButtonIndex)
                    ? 'selected'
                    : ''
                }
              >
                {getBtnIdx(idx, currentButtonIndex) + 1}
              </S.Button>
            </Link>
          </li>
        ))}
      <li>
        <S.Button type="button" onClick={handleNext}>
          &gt;&gt;
        </S.Button>
      </li>
    </S.Container>
  );
};

const getButtonCountPerPage = (
  totalButtonIndex,
  currentButtonIndex,
  totalPage,
) => {
  if (totalButtonIndex < 1) return totalPage;
  if (currentButtonIndex < totalButtonIndex) return LIMIT;
  return totalPage % LIMIT === 0 ? LIMIT : totalPage % LIMIT;
};

const getBtnIdx = (idx, currentButtonIndex) => {
  return idx + 10 * currentButtonIndex;
};

export default Pagination;
