const BROWSER_PATH = {
  BASE: '/',
  LANDING: '/landing',
  SIGNUP: '/signup',
  OAUTH: '/oauth',
  EDIT: '/edit',
  MYPAGE: {
    BASE: '/me',
    INFO: 'info',
    DIARY: 'diary',
  },
};

const API_PATH = {
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  REISSUE: '/auth/reissue',
  LOGOUT: '/auth/logout',
  UPDATE_EMAIL: '/auth/update/email',
  UPDATE_NICKNAME: '/auth/update/nickname',
  WITHDRAWAL: '/auth/withdrawal',
<<<<<<< HEAD
  DIARY: '/diary',
=======
  DIARY_BY_MOOD: '/diary/mood',
  DIARY_NUM_BY_MOOD: '/diary/mood/num',
>>>>>>> 307e1f1304fb36ad80b847ac66797dea778fac81
  IMAGE: '/upload',
};

const KAKAO_REDIRECT_URI = `${window.location.origin}${BROWSER_PATH.OAUTH}`;

export { BROWSER_PATH, API_PATH, KAKAO_REDIRECT_URI };
