const BROWSER_PATH = {
  BASE: '/',
  LANDING: '/landing',
  SIGNUP: '/signup',
  OAUTH: '/oauth',
  EDIT: '/edit',
  MYPAGE: {
    MAIN: '/mypage',
    MYINFO: 'myinfo',
    DIARIESBYEMOTION: 'diariesbyemotion',
  },
};

const API_PATH = {
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  REISSUE: '/auth/reissue',
  LOGOUT: '/auth/logout',
  EMAILUPDATE: '/auth/update/email',
  NICKNAMEUPDATE: '/auth/update/nickname',
  WITHDRAWL: '/auth/withdrawal',
};

const KAKAO_REDIRECT_URI = `${window.location.origin}${BROWSER_PATH.OAUTH}`;

export { BROWSER_PATH, API_PATH, KAKAO_REDIRECT_URI };
