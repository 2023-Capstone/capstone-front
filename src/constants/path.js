const BROWSER_PATH = {
  BASE: '/',
  LANDING: '/landing',
  SIGNUP: '/signup',
  OAUTH: '/oauth',
  EDIT: '/edit',
  MYPAGE: {
    BASE: '/me',
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
  DIARY: '/diary',
  DIARY_BY_MOOD: '/diary/mood',
  DIARY_COUNT_BY_MOOD: '/diary/mood/count',
  DIARY_RANDOM: '/random/diary',
  DIARY_COUNT: '/total',
  IMAGE: '/upload',
};

const KAKAO_REDIRECT_URI = `${window.location.origin}${BROWSER_PATH.OAUTH}`;

export { BROWSER_PATH, API_PATH, KAKAO_REDIRECT_URI };
