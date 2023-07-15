import { atom } from 'jotai';

import { accessTokenProvider } from '@/utils/token';
import { infoProvider } from '@/utils/user';

const userAtom = atom({
  isLogin: accessTokenProvider.get() ? true : false,
  info: infoProvider.get() ? infoProvider.get() : {},
});

const snackbarAtom = atom({
  isShowing: false,
  message: '',
});

export { userAtom, snackbarAtom };
