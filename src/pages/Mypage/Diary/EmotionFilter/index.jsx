const EmotionFilter = ({ filter, changeFilter }) => {
  const changeDiaryFilter = filter => () => {
    changeFilter(filter);
  };
  return (
    <>
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
    </>
  );
};

export default EmotionFilter;
