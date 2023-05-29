import { rest } from 'msw';

import { baseURL } from '@/apis/axios';
import { API_PATH } from '@/constants/path';

const diaryCount = {
  best: 299,
  good: 30,
  normal: 19,
  bad: 102,
  worst: 5,
};

const diaryLastCount = {
  best: diaryCount['best'] % 10 === 0 ? 10 : diaryCount['best'] % 10,
  good: diaryCount['good'] % 10 === 0 ? 10 : diaryCount['good'] % 10,
  normal: diaryCount['normal'] % 10 === 0 ? 10 : diaryCount['normal'] % 10,
  bad: diaryCount['bad'] % 10 === 0 ? 10 : diaryCount['bad'] % 10,
  worst: diaryCount['worst'] % 10 === 0 ? 10 : diaryCount['worst'] % 10,
};

const diaryHandlers = [
  rest.get(
    `${baseURL}${API_PATH.DIARY_BY_EMOTION}?mood=mood&page=page&size=10`,
    (req, res, ctx) => {
      const mood = req.url.searchParams.get('mood');
      const page = req.url.searchParams.get('page');
      return res(
        ctx.status(200),
        ctx.json(
          Array(
            Math.ceil(diaryCount[mood] / 10) !== Number(page) + 1
              ? 10
              : diaryLastCount[mood],
          )
            .fill()
            .map((_, idx) => ({
              id: idx,
              title: `${idx + 1}. 기분: ${mood}, 현 페이지 인덱스: ${page}`,
              createAt: '2023.04.10',
              thumbnail:
                'https://img.freepik.com/free-vector/realistic-galaxy-background_52683-12122.jpg?w=996&t=st=1685182864~exp=1685183464~hmac=8160b98907f8e6720f417f467574e988f56c737085b90ce65ebdf46ef808fba2',
            })),
        ),
      );
    },
  ),
  rest.get(`${baseURL}${API_PATH.DIARY_NUM_BY_EMOTION}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(diaryCount));
  }),
];
export default diaryHandlers;
