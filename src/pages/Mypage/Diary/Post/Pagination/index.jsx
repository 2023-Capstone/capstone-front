import { useEffect, useState } from 'react';
import * as S from './index.styles';

const LIMIT = 10;

const Pagination = ({ totalPage, changeCurrentPage, currentPage }) => {
  const [totalButtonIndex, setTotalButtonIndex] = useState(
    Math.floor(totalPage / LIMIT),
  );
  const [currentButtonIndex, setCurrentButtonIndex] = useState(0);

  useEffect(() => {
    setTotalButtonIndex(Math.ceil(totalPage / LIMIT) - 1);
    setCurrentButtonIndex(0);
  }, [totalPage]);

  const changePage = nextPage => () => {
    changeCurrentPage(nextPage);
  };

  const handlePrev = () => {
    if (currentButtonIndex <= 0) return;

    setCurrentButtonIndex(currentButtonIndex - 1);
    changeCurrentPage(10 * (currentButtonIndex - 1));
  };

  const handleNext = () => {
    if (currentButtonIndex >= totalButtonIndex) return;

    setCurrentButtonIndex(currentButtonIndex + 1);
    changeCurrentPage(10 * (currentButtonIndex + 1));
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
            <S.Button
              className={
                currentPage === getBtnIdx(idx, currentButtonIndex)
                  ? 'selected'
                  : ''
              }
              onClick={changePage(getBtnIdx(idx, currentButtonIndex))}
            >
              {getBtnIdx(idx, currentButtonIndex) + 1}
            </S.Button>
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
  console.log(totalButtonIndex, currentButtonIndex, totalPage);
  if (totalButtonIndex < 1) return totalPage;
  if (currentButtonIndex < totalButtonIndex) return LIMIT;
  return totalPage % LIMIT === 0 ? LIMIT : totalPage % LIMIT;
};

const getBtnIdx = (idx, currentButtonIndex) => {
  return idx + 10 * currentButtonIndex;
};

export default Pagination;
