const Item = ({ item }) => {
  return (
    <li>
      <h1>{item.title}</h1>
      {/* <div
        style={{
          width: '150px',
          height: '200px',
          backgroundColor: 'yellowGreen',
        }}
      ></div> */}
      <span>{item.createAt}</span>
    </li>
  );
};

export default Item;
