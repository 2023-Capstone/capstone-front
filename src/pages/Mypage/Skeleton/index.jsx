import useDisplay from '@/hooks/useDisplay';
import * as S from './index.styles';
import { LIMIT } from '@/constants/diary';

const Skeleton = () => {
  const [display] = useDisplay();
  return (
    <S.Container>
      <S.WrapperFilter>
        <S.FilterMood />
        <S.FilterDisplay />
      </S.WrapperFilter>
      <S.Post className={display}>
        {Array(LIMIT.PAGE)
          .fill()
          .map(_ => (
            <S.Item className={display} />
          ))}
      </S.Post>
      <S.Pagination>
        {Array(LIMIT.BUTTON)
          .fill()
          .map(_ => (
            <S.Button />
          ))}
      </S.Pagination>
    </S.Container>
  );
};

export default Skeleton;
