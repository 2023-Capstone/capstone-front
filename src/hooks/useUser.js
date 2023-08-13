import { useAtom } from 'jotai';

import { requestInfo, requestReissueAccessToken } from '@/apis/request/auth';
import { userAtom } from '@/store';
import {
  accessTokenProvider,
  refreshTokenProvider,
  kakaoAccessTokenProvider,
} from '@/utils/token';

const useUser = () => {
  const [{ isLogin, info }, setUser] = useAtom(userAtom);

  const login = (accessToken, refreshToken) => {
    accessTokenProvider.set(accessToken);
    refreshTokenProvider.set(refreshToken);
    kakaoAccessTokenProvider.remove();
    requestAndSetUserInfo();
  };

  const logout = () => {
    accessTokenProvider.remove();
    refreshTokenProvider.remove();
    kakaoAccessTokenProvider.remove();
    setUser({ isLogin: false, info: null });
  };

  const requestAndSetUserInfo = () => {
    requestInfo().then(info => {
      setUser({ isLogin: true, info });
    });
  };

  const reissueAccessToken = () => {
    requestReissueAccessToken().then(accessToken => {
      accessTokenProvider.set(accessToken);
    });
  };

  return {
    isLogin,
    login,
    logout,
    info,
    requestAndSetUserInfo,
    reissueAccessToken,
  };
};

export default useUser;
