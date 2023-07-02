import { useNavigate } from 'react-router-dom';

const WritingButton = () => {
  const navigate = useNavigate();

  const goToEdit = () => {
    navigate('/edit');
  };
  return (
    <button type="button" onClick={goToEdit}>
      일기 작성하기
    </button>
  );
};

export default WritingButton;
