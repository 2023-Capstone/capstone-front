import { useEffect, useState } from 'react';

const LIMIT = 10;

const Pagination = ({ totalPage, changeCurrentPage }) => {
  const [totalButtonIndex, setTotalButtonIndex] = useState(
    Math.ceil(totalPage / LIMIT),
  );
  const [currentButtonIndex, setCurrentButtonIndex] = useState(1);

  useEffect(() => {
    setTotalButtonIndex(Math.ceil(totalPage / LIMIT));
    setCurrentButtonIndex(1);
  }, [totalPage]);

  const changePage = nextPage => () => {
    changeCurrentPage(nextPage);
  };

  const handlePrev = () => {
    if (currentButtonIndex <= 1) return;
    setCurrentButtonIndex(currentButtonIndex - 1);
  };

  const handleNext = () => {
    if (currentButtonIndex >= totalButtonIndex) return;
    setCurrentButtonIndex(currentButtonIndex + 1);
  };

  return (
    <ul>
      <li>
        <button onClick={handlePrev}>&lt;</button>
      </li>
      {Array(
        getButtonNumberPerPage(totalButtonIndex, currentButtonIndex, totalPage),
      )
        .fill()
        .map((_, idx) => (
          <li key={idx}>
            <button onClick={changePage(idx + 10 * (currentButtonIndex - 1))}>
              {idx + 1 + 10 * (currentButtonIndex - 1)}
            </button>
          </li>
        ))}
      <li>
        <button type="button" onClick={handleNext}>
          &gt;
        </button>
      </li>
    </ul>
  );
};

const getButtonNumberPerPage = (
  totalButtonIndex,
  currentButtonIndex,
  totalPage,
) => {
  if (totalButtonIndex <= 1) return totalPage;
  if (currentButtonIndex < totalButtonIndex) return LIMIT;
  return totalPage % LIMIT;
};

export default Pagination;
