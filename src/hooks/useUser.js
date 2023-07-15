import { useAtom } from 'jotai';
import { userAtom } from '@/store';
import {
  accessTokenProvider,
  refreshTokenProvider,
  kakaoAccessTokenProvider,
} from '@/utils/token';
import { requestInfo } from '@/apis/request/auth';
import { infoProvider } from '@/utils/user';

const useUser = () => {
  const [{ isLogin, info }, setUser] = useAtom(userAtom);

  const login = (accessToken, refreshToken) => {
    accessTokenProvider.set(accessToken);
    refreshTokenProvider.set(refreshToken);
    kakaoAccessTokenProvider.remove();

    requestInfo().then(info => {
      infoProvider.set(info);
      setUser({ isLogin: true, info });
    });
  };

  const logout = () => {
    accessTokenProvider.remove();
    refreshTokenProvider.remove();
    kakaoAccessTokenProvider.remove();
    infoProvider.remove();
    setUser({ isLogin: false, info: null });
  };

  return { isLogin, login, logout, info };
};

export default useUser;
