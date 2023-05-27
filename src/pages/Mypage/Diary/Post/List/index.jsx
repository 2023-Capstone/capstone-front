import Item from './Item';
import * as S from './index.styles';
const List = ({ list, isThumbnail }) => {
  return (
    <S.Container display={isThumbnail ? 'grid' : 'list'}>
      {list.map(item => (
        <Item key={item.id} item={item} isThumbnail={isThumbnail} />
      ))}
    </S.Container>
  );
};

export default List;
