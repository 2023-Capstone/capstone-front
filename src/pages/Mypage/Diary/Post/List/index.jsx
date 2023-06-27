import useDisplay from '@/hooks/useDisplay';
import Item from './Item';
import * as S from './index.styles';

const List = ({ list }) => {
  const [display] = useDisplay();
  return (
    <S.Container className={display}>
      {list.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </S.Container>
  );
};

export default List;
