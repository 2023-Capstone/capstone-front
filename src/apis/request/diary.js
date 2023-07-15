import { axios, axiosWithAccessToken } from '@/apis/axios';
import { API_PATH } from '@/constants/path';

const requestUploadImg = formData => {
  return axios.post(API_PATH.IMAGE, formData);
};

const requestUploadDiary = diary => {
  return axiosWithAccessToken
    .post(API_PATH.DIARY, diary)
    .then(response => response.data.id);
};

const requestDiaryByMood = params => {
  return axiosWithAccessToken
    .get(
      `${API_PATH.DIARY_BY_MOOD}?mood=${params.mood}&page=${params.page}&size=${params.size}`,
    )
    .then(response => response.data);
};

const requestDiaryCountByMood = () => {
  return axiosWithAccessToken
    .get(`${API_PATH.DIARY_COUNT_BY_MOOD}`)
    .then(response => response.data);
};

const getDiary = id => {
  return axiosWithAccessToken
    .get(`${API_PATH.DIARY}/${id}`)
    .then(response => response.data);
};

const getdiaryLisyByCalendar = (year, month) => {
  return axiosWithAccessToken
    .get(`${API_PATH.CALENDAR}?year=${year}&month=${month}`)
    .then(response => response.data);
};

export {
  requestUploadImg,
  requestUploadDiary,
  requestDiaryByMood,
  requestDiaryCountByMood,
  getDiary,
  getdiaryLisyByCalendar,
};
