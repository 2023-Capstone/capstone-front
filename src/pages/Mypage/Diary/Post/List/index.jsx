import Item from './Item';

const List = ({ list }) => {
  return (
    <>
      {list.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </>
  );
};

export default List;
