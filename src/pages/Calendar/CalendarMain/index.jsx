import * as S from './index.style';

import { DAYS } from '@/constants/calendar';

const CalendarMain = ({ currentYear, currentMonth }) => {
  const totalDate = new Date(currentYear, currentMonth, 0).getDate();
  const startDate = new Date(currentYear, currentMonth - 1, 1).getDay() + 1;
  console.log(totalDate);
  return (
    <S.Container>
      <S.DayBox>
        {DAYS.map(day => (
          <S.Day day={day}>{day}</S.Day>
        ))}
      </S.DayBox>
      <S.DayBox>
        {Array.from(Array(totalDate).keys()).map(i => (
          <S.Day day={i + 1} startDate={startDate}>
            {i + 1}
          </S.Day>
        ))}
      </S.DayBox>
    </S.Container>
  );
};

export default CalendarMain;
