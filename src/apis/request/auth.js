import { axios, axiosWithRefreshToken } from '@/apis/axios';
import { API_PATH } from '@/constants/path';

const requestLogin = code => {
  return axios.post(API_PATH.LOGIN, { code }).then(response => response.data);
};

const requestSignup = userData => {
  return axios.post(API_PATH.SIGNUP, userData).then(response => response.data);
};

const requestReissueAccessToken = () => {
  return axiosWithRefreshToken
    .post(API_PATH.REISSUE)
    .then(response => response.data.accessToken);
};

const requestLogout = () => {
  return axiosWithRefreshToken.post(API_PATH.LOGOUT);
};

const requestEmailUpdate = userData => {
  return axiosWithRefreshToken
    .patch(API_PATH.EMAILUPDATE, userData)
    .then(response => response.data);
};

const requestNicknameUpdate = userData => {
  return axiosWithRefreshToken
    .patch(API_PATH.NICKNAMEUPDATE, userData)
    .then(response => response.data);
};

const requestWithdrawl = () => {
  return axiosWithRefreshToken.delete(API_PATH.WITHDRAWL);
};

export {
  requestLogin,
  requestSignup,
  requestReissueAccessToken,
  requestLogout,
  requestEmailUpdate,
  requestNicknameUpdate,
  requestWithdrawl,
};
