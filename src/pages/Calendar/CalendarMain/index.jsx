import * as S from './index.style';

import { DAYS } from '@/constants/calendar';

const CalendarMain = ({ currentYear, currentMonth }) => {
  const totalDate = new Date(currentYear, currentMonth, 0).getDate();
  const startDate = new Date(currentYear, currentMonth - 1, 1).getDay() + 1;
  console.log(startDate);
  return (
    <S.Container>
      <S.DayBox>
        {DAYS.map(day => (
          <S.Day day={day}>{day}</S.Day>
        ))}
      </S.DayBox>
      <S.DayBox>
        {Array.from(Array(totalDate).keys()).map(i => (
          <S.Date date={i} startDate={startDate}>
            {i + 1}
          </S.Date>
        ))}
      </S.DayBox>
    </S.Container>
  );
};

export default CalendarMain;
