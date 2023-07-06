import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

import * as S from './index.style';

const CalendarHeader = ({
  currentMonth,
  currentYear,
  moveNextMonth,
  movePrevMonth,
}) => {
  return (
    <S.Container>
      <S.MoveBtn>
        <AiOutlineLeft onClick={movePrevMonth} />
      </S.MoveBtn>
      <S.SelectContainer>
        <S.SelecedValue>{currentYear} 년</S.SelecedValue>
        <S.SelectBox></S.SelectBox>
      </S.SelectContainer>
      <S.SelectContainer>
        <S.SelecedValue>{currentMonth} 월</S.SelecedValue>
        <S.SelectBox></S.SelectBox>
      </S.SelectContainer>
      <S.MoveBtn>
        <AiOutlineRight onClick={moveNextMonth} />
      </S.MoveBtn>
    </S.Container>
  );
};

export default CalendarHeader;
