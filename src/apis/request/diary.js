import { axios } from '@/apis/axios';
import { API_PATH } from '@/constants/path';

const requestUploadImg = formData => {
  return axios.post(API_PATH.IMAGE, formData);
};

const postNewDiary = diary => {
  return axios.post(API_PATH.DIARY, diary);
};

export { requestUploadImg, postNewDiary };
