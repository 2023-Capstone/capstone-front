import { useEffect, useState } from 'react';
import useInput from '@/hooks/useInput';
import { RULE } from '@/constants/rule';
import { CLIENT_MESSAGE } from '@/constants/message';
import { requestUpdateEmail, requestUpdateNickname } from '@/apis/request/auth';
import { requestWithdrawal } from '@/apis/request/auth';
import { useNavigate } from 'react-router-dom';
import { BROWSER_PATH } from '@/constants/path';
import useError from '@/hooks/useError';
import useUser from '@/hooks/useUser';
import useSnackbar from '@/hooks/useSnackbar';
import Inputs from './Inputs';
import WithdrawalModal from './WithdrawalModal';
import * as S from './index.styles';

const Info = props => {
  const {
    value: email,
    onChangeValue: changeEmail,
    dangerouslySetValue: dangerouslySetEmail,
  } = useInput('');
  const {
    value: nickname,
    onChangeValue: changeNickname,
    dangerouslySetValue: dangerouslySetNickname,
  } = useInput('');

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidNickname, setIsValidNickname] = useState(false);
  const handleError = useError();
  const { logout } = useUser();
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    setIsValidEmail(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email),
    );
  }, [email]);

  useEffect(() => {
    setIsValidNickname(
      nickname.length >= RULE.NICKNAME.MIN &&
        nickname.length <= RULE.NICKNAME.MAX,
    );
  }, [nickname]);

  const handleSubmitEmail = e => {
    e.preventDefault();

    if (!isValidEmail) {
      alert(CLIENT_MESSAGE.ERROR.INVAILD_INPUT);
      return;
    }

    requestUpdateEmail({ email })
      .then(({ email }) => {
        showSnackbar(CLIENT_MESSAGE.GUIDE.SUCCESS_UPDATE_EMAIL);
        dangerouslySetEmail(email);
      })
      .catch(error => {
        alert(handleError(error.code));
      });
  };

  const handleSubmitNickname = e => {
    e.preventDefault();

    if (!isValidNickname) {
      alert(CLIENT_MESSAGE.ERROR.INVAILD_INPUT);
      return;
    }

    requestUpdateNickname({ nickname })
      .then(({ nickname }) => {
        showSnackbar(CLIENT_MESSAGE.GUIDE.SUCCESS_UPDATE_NICKNAME);
        dangerouslySetNickname(nickname);
      })
      .catch(error => {
        alert(handleError(error.code));
      });
  };

  const handleWithdraw = e => {
    e.preventDefault();

    requestWithdrawal()
      .then(() => {
        logout();
        showSnackbar(CLIENT_MESSAGE.GUIDE.SUCCESS_WITHDRAWAL);

        navigate(BROWSER_PATH.BASE);
      })
      .catch(error => {
        alert(handleError(error.code));
      });
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>프로필 수정</S.Title>
        <Inputs
          email={email}
          changeEmail={changeEmail}
          isValidEmail={isValidEmail}
          nickname={nickname}
          changeNickname={changeNickname}
          isValidNickname={isValidNickname}
          submitEmail={handleSubmitEmail}
          submitNickname={handleSubmitNickname}
        />
      </S.Wrapper>
      <WithdrawalModal withdraw={handleWithdraw} />
    </S.Container>
  );
};

export default Info;
