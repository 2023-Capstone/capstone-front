import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) return;
    if (infoProvider.get()) return;

    requestInfo().then(info => {
      infoProvider.set(info);
      setUser({ isLogin, info });

      navigate(0);
    });
  }, [isLogin]);

  const login = (accessToken, refreshToken) => {
    accessTokenProvider.set(accessToken);
    refreshTokenProvider.set(refreshToken);
    kakaoAccessTokenProvider.remove();

    setUser({ isLogin: true });
  };

  const logout = () => {
    accessTokenProvider.remove();
    refreshTokenProvider.remove();
    kakaoAccessTokenProvider.remove();

    infoProvider.remove();
    setUser({ isLogin: false, info: null });
  };

  return { isLogin, info, login, logout };
};

export default useUser;
