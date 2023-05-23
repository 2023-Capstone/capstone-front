const Item = ({ item, isThumbnail }) => {
  return (
    <li>
      <h1>{item.title}</h1>
      <span>{item.createAt}</span>
      <div className={isThumbnail ? 'show' : ''}>
        <img src="@" alt="썸네일" />
        이미지 보여줌:{isThumbnail ? 'show' : ''}
      </div>
    </li>
  );
};

export default Item;
