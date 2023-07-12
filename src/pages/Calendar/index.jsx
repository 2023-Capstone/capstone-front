import { useEffect, useState } from 'react';

import CalendarHeader from './CalendarHeader';
import CalendarMain from './CalendarMain';
import * as S from './index.style';

import { MOOD_ICON } from '@/constants/diary';

const data = [
  {
    id: '1',
    date: '2023-07-01',
    mood: 'best',
    desc: '오늘은 공부하려다가 진격거 정주행 해버림 ㅋㅋ',
  },
  {
    id: '2',
    date: '2023-07-04',
    mood: 'good',
    desc: '아 코테 내일인데 어떡하냐 ㅋㅋ',
  },
  {
    id: '3',
    date: '2023-07-12',
    mood: 'bad',
    desc: '나는 진짜 뭐해먹고 살지..?',
  },
];

const Calendar = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [diaryCount, setDiaryCount] = useState(0);
  const [currentData, setCurrentData] = useState({});
  const [yearSelect, setYearSelect] = useState(false);
  const [monthSelect, setMonthSelect] = useState(false);

  useEffect(() => {
    const newData = {};
    let count = 0;
    data.forEach(diary => {
      const [y, m, d] = diary.date.split('-').map(n => Number(n));
      if (currentYear !== y || currentMonth !== m) return;
      newData[d] = {
        id: diary.id,
        mood: MOOD_ICON[diary.mood],
        desc: diary.desc,
      };
      count += 1;
    });
    setDiaryCount(count);
    setCurrentData(newData);
  }, [currentMonth, currentYear]);

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

  const changeDate = type => e => {
    switch (type) {
      case 'year':
        setCurrentYear(e.target.value);
        setYearSelect(false);

        return;
      case 'month':
        setCurrentMonth(e.target.value);
        setMonthSelect(false);

        return;
      default:
        return;
    }
  };

  const toggleSelect = type => e => {
    e.stopPropagation();
    switch (type) {
      case 'year':
        setYearSelect(!yearSelect);
        setMonthSelect(false);

        return;
      case 'month':
        setMonthSelect(!monthSelect);
        setYearSelect(false);

        return;
      default:
        setMonthSelect(false);
        setYearSelect(false);

        return;
    }
  };

  return (
    <S.Container onClick={toggleSelect()}>
      <CalendarHeader
        currentMonth={currentMonth}
        currentYear={currentYear}
        moveNextMonth={moveNextMonth}
        movePrevMonth={movePrevMonth}
        yearSelect={yearSelect}
        monthSelect={monthSelect}
        toggleSelect={toggleSelect}
        changeDate={changeDate}
        diaryCount={diaryCount}
      />
      <CalendarMain
        currentMonth={currentMonth}
        currentYear={currentYear}
        currentData={currentData}
      />
    </S.Container>
  );
};

export default Calendar;