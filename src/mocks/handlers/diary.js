import { rest } from 'msw';

import { baseURL } from '@/apis/axios';
import { API_PATH } from '@/constants/path';

const diaryHandlers = [
  rest.get(
    `${baseURL}${API_PATH.DIARY_BY_EMOTION}?mood=best&page=0&size=10`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 12,
            title: '새 포스트12',

            createAt: '2023-04-10T14:33:25.610691',
          },
          {
            id: 11,
            title: '새 포스트11',
            createAt: '2023-04-10T14:33:23.179573',
          },
          {
            id: 10,
            title: '새 포스트10',
            createAt: '2023-04-10T14:33:20.646264',
          },
          {
            id: 9,
            title: '새 포스트9',
            createAt: '2023-04-10T14:33:18.170682',
          },
          {
            id: 8,
            title: '새 포스트8',
            createAt: '2023-04-10T14:33:15.474825',
          },
          {
            id: 7,
            title: '새 포스트7',
            createAt: '2023-04-10T14:33:12.378254',
          },
          {
            id: 6,
            title: '새 포스트6',

            createAt: '2023-04-10T14:33:25.610691',
          },
          {
            id: 5,
            title: '새 포스트5',
            createAt: '2023-04-10T14:33:23.179573',
          },
          {
            id: 4,
            title: '새 포스트4',
            createAt: '2023-04-10T14:33:20.646264',
          },
          {
            id: 3,
            title: '새 포스트3',
            createAt: '2023-04-10T14:33:18.170682',
          },
          {
            id: 2,
            title: '새 포스트2',
            createAt: '2023-04-10T14:33:15.474825',
          },
          {
            id: 1,
            title: '새 포스트1',
            createAt: '2023-04-10T14:33:12.378254',
          },
        ]),
      );
    },
  ),
  rest.get(`${baseURL}${API_PATH.DIARY_NUM_BY_EMOTION}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        best: 555,
        good: 30,
        normal: 19,
        bad: 122,
        worst: 5,
      }),
    );
  }),
];
export default diaryHandlers;
