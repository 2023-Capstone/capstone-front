import { IoGrid } from 'react-icons/io5';
import { FaList } from 'react-icons/fa';

const EmotionFilter = ({ filter, changeFilter, onThumbnail }) => {
  const changeDiaryFilter = filter => () => {
    changeFilter(filter);
  };

  const showThumbnail = isThumbnail => () => {
    onThumbnail(isThumbnail);
  };
  return (
    <>
      <div>
        <button type="button" onClick={changeDiaryFilter('best')}>
          최상😁
        </button>
        <button type="button" onClick={changeDiaryFilter('good')}>
          상😊
        </button>
        <button type="button" onClick={changeDiaryFilter('normal')}>
          중🙂
        </button>
        <button type="button" onClick={changeDiaryFilter('bad')}>
          하😑
        </button>
        <button type="button" onClick={changeDiaryFilter('worst')}>
          최하😩
        </button>
      </div>
      <div>
        <button type="button" onClick={showThumbnail(true)}>
          <IoGrid />
        </button>
        <button type="button" onClick={showThumbnail(false)}>
          <FaList />
        </button>
      </div>
    </>
  );
};

export default EmotionFilter;
