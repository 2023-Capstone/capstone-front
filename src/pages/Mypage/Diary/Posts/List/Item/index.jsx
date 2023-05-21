const Item = ({ item }) => {
  return (
    <li>
      <h1>{item.title}</h1>
      <span>{item.createAt}</span>
    </li>
  );
};

export default Item;
