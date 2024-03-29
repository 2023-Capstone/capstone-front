const BROWSER_PATH = {
  BASE: '/',
  LANDING: '/landing',
  SIGNUP: '/signup',
  OAUTH: '/oauth',
  NEW: '/new',
  EDIT: '/edit',
  MYPAGE: {
    BASE: '/me',
    DIARY: 'diary',
  },
  CALENDAR: '/calendar',
  DETAIL: '/detail',
};

const API_PATH = {
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  REISSUE: '/auth/reissue',
  LOGOUT: '/auth/logout',
  UPDATE_EMAIL: '/user/update/email',
  UPDATE_NICKNAME: '/user/update/nickname',
  WITHDRAWAL: '/auth/withdrawal',
  INFO: '/auth/info',
  DIARY: '/diary',
  DIARY_BY_MOOD: '/mood',
  DIARY_COUNT_BY_MOOD: '/mood/count',
  DIARY_RANDOM: '/random/diary',
  DIARY_COUNT: '/total',
  IMAGE: '/upload',
  CALENDAR: '/calendar',
  SEARCH: '/search',
};

const KAKAO_REDIRECT_URI = `${window.location.origin}${BROWSER_PATH.OAUTH}`;

export { BROWSER_PATH, API_PATH, KAKAO_REDIRECT_URI };
