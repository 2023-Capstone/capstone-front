import { axios, axiosWithAccessToken } from '@/apis/axios';
import { API_PATH } from '@/constants/path';

const requestUploadImg = formData => {
  return axios.post(API_PATH.IMAGE, formData);
};

const requestDiaryByEmotion = params => {
  return axiosWithAccessToken
    .get(
      `${API_PATH.DIARY_BY_EMOTION}?mood=${params.mood}&page=${params.page}&size=${params.size}`,
    )
    .then(response => response.data);
};

const requestDiaryNumByEmotion = () => {
  return axiosWithAccessToken
    .get(`${API_PATH.DIARY_NUM_BY_EMOTION}`)
    .then(response => response.data);
};

export { requestUploadImg, requestDiaryByEmotion, requestDiaryNumByEmotion };
