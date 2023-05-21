import { useEffect, useState } from 'react';

const LIMIT = 10;

const Pagination = ({ pageNumber, currentPage, changeCurrentPage }) => {
  if (pageNumber) {
    const [totalIndex, setTotalIndex] = useState(Math.ceil(pageNumber / LIMIT));

    const [currentIndex, setCurrentIndex] = useState(1);

    useEffect(() => {
      setTotalIndex(Math.ceil(pageNumber / LIMIT));
    }, [pageNumber, LIMIT]);

    const changePage = nextPage => () => {
      changeCurrentPage(nextPage);
    };

    const handlePrev = () => {
      if (currentIndex <= 1) return;
      setCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
      if (currentIndex >= totalIndex) return;
      setCurrentIndex(currentIndex + 1);
    };

    return (
      <ul>
        <li>
          <button onClick={handlePrev}>&lt;이전</button>
        </li>
        {Array(
          totalIndex > 1
            ? currentIndex < totalIndex
              ? LIMIT
              : totalIndex % LIMIT
            : pageNumber,
        )
          .fill()
          .map((_, idx) => (
            <li key={idx}>
              <button onClick={changePage(idx + 1 + 10 * (currentIndex - 1))}>
                {idx + 1 + 10 * (currentIndex - 1)}
              </button>
            </li>
          ))}
        <li>
          <button type="button" onClick={handleNext}>
            다음&gt;
          </button>
        </li>
      </ul>
    );
  }
};

export default Pagination;
