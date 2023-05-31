import { useEffect, useState } from 'react';
import * as S from './index.styles';

const LIMIT = 10;

const Pagination = ({ totalPage, mood, page, setParams, LinkTo }) => {
  const [totalButtonIndex, setTotalButtonIndex] = useState(
    Math.ceil(totalPage / LIMIT) - 1,
  );
  const [currentButtonIndex, setCurrentButtonIndex] = useState(0);

  useEffect(() => {
    setTotalButtonIndex(Math.ceil(totalPage / LIMIT) - 1);
    setCurrentButtonIndex(0);
  }, [totalPage]);

  useEffect(() => {
    setCurrentButtonIndex(Math.floor(Number(page) / LIMIT));
  }, [page]);

  const handlePrev = () => {
    if (currentButtonIndex <= 0) return;

    const prevIdx = currentButtonIndex - 1;

    setCurrentButtonIndex(prevIdx);
    setParams(mood, 10 * prevIdx);
  };

  const handleNext = () => {
    if (currentButtonIndex >= totalButtonIndex) return;

    const nextIdx = currentButtonIndex + 1;

    setCurrentButtonIndex(nextIdx);
    setParams(mood, 10 * nextIdx);
  };

  return (
    <S.Container>
      {console.log(mood, page)}
      <li>
        <S.Button onClick={handlePrev}>&lt;&lt;</S.Button>
      </li>
      {Array(
        getButtonCountPerPage(totalButtonIndex, currentButtonIndex, totalPage),
      )
        .fill()
        .map((_, idx) => (
          <li key={idx}>
            <LinkTo mood={mood} page={getBtnIdx(idx, currentButtonIndex)}>
              <S.Button
                className={
                  Number(page) === getBtnIdx(idx, currentButtonIndex)
                    ? 'selected'
                    : ''
                }
              >
                {getBtnIdx(idx, currentButtonIndex) + 1}
              </S.Button>
            </LinkTo>
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
