import { MOOD } from '@/constants/diary';

const convertDiaryData = (diaries, year, month) => {
  const convertedDiaries = {};
  let count = 0;
  diaries.forEach(diary => {
    const [y, m, d] = diary.date.split('-').map(n => Number(n));
    if (year !== y || month !== m) return;
    convertedDiaries[d] = {
      id: diary.id,
      mood: MOOD[diary.mood.toUpperCase()].emoji,
      desc: diary.desc,
    };
    count += 1;
  });
  return [convertedDiaries, count];
};

export { convertDiaryData };
