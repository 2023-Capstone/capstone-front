// 이름 추천 받아요
import { MOOD_ICON } from '@/constants/diary';

const convertDiaryData = (diaries, year, month) => {
  const convertedDiaries = {};
  let count = 0;
  diaries.forEach(diary => {
    const [y, m, d] = diary.date.split('-').map(n => Number(n));
    if (year !== y || month !== m) return;
    convertedDiaries[d] = {
      id: diary.id,
      mood: MOOD_ICON[diary.mood],
      desc: diary.desc,
    };
    count += 1;
  });
  return [convertedDiaries, count];
};

export { convertDiaryData };
