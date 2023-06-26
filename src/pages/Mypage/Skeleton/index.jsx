import * as S from './index.styles';
import { LIMIT } from '@/constants/diary';

const Skeleton = () => {
  return (
    <S.Container>
      <S.WrapperFilter>
        <S.FilterMood />
        <S.FilterDisplay />
      </S.WrapperFilter>
      <S.Post>
        {Array(LIMIT.PAGE)
          .fill()
          .map(_ => (
            <S.Item></S.Item>
          ))}
      </S.Post>
      <S.Pagination>
        {Array(LIMIT.BUTTON)
          .fill()
          .map(_ => (
            <S.Button></S.Button>
          ))}
      </S.Pagination>
    </S.Container>
  );
};

export default Skeleton;
