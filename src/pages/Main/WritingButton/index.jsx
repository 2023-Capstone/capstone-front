import { useNavigate } from 'react-router-dom';
import * as S from './index.styles';

const WritingButton = () => {
  const navigate = useNavigate();

  const goToEdit = () => {
    navigate('/edit');
  };
  return (
    <S.Button type="button" onClick={goToEdit}>
      일기 작성하기
    </S.Button>
  );
};

export default WritingButton;
