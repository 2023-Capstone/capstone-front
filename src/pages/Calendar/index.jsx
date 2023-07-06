import { useState } from 'react';

import CalendarHeader from './CalendarHeader';
import CalendarMain from './CalendarMain';
import * as S from './index.style';

const data = [
  {
    d: 1,
  },
  {
    d: 1,
  },
  {
    d: 1,
  },
  {
    d: 1,
  },
];

const Calendar = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const moveNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
      return;
    }
    setCurrentMonth(currentMonth + 1);
  };
  const movePrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
      return;
    }
    setCurrentMonth(currentMonth - 1);
  };
  return (
    <S.Container>
      <CalendarHeader
        currentMonth={currentMonth}
        currentYear={currentYear}
        moveNextMonth={moveNextMonth}
        movePrevMonth={movePrevMonth}
      />
      <CalendarMain />
    </S.Container>
  );
};

export default Calendar;
