import { rest } from 'msw';

import { baseURL } from '@/apis/axios';
import { API_PATH } from '@/constants/path';

const diaryCount = {
  best: 299,
  good: 30,
  normal: 19,
  bad: 100,
  worst: 5,
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
          Array(10)
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
