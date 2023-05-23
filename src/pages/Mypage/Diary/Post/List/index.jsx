import Item from './Item';

const List = ({ list, isThumbnail }) => {
  return (
    <>
      {list.map(item => (
        <Item key={item.id} item={item} isThumbnail={isThumbnail} />
      ))}
    </>
  );
};

export default List;
