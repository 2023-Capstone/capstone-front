import React, { useEffect, useState } from 'react';
import Inputs from './Inputs';
import useInput from '@/hooks/useInput';
import { RULE } from '@/constants/rule';
import { CLIENT_MESSAGE } from '@/constants/message';
import { requestEmailUpdate, requestNicknameUpdate } from '@/apis/request/auth';
import * as S from './index.styles';
import WithdrawlModal from './WithdrawlModal';

const MyInfo = props => {
  const [email, changeEmail] = useInput('');
  const [nickname, changeNickname] = useInput('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidNickname, setIsValidNickname] = useState(false);

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

  const handleEmailSubmit = e => {
    e.preventDefault();

    if (!isValidEmail) {
      alert('입력값을 확인해주세요.');

      return;
    }
    requestEmailUpdate({ email }) //
      .then(({ newEmail }) => {
        showSnackbar(CLIENT_MESSAGE.GUIDE.SUCCESS_EMAILUPDATE);
        changeEmail(newEmail);
      })
      .catch(error => {
        alert(CLIENT_MESSAGE.ERROR.FAIL_EMAILUPDATE);
      });
  };

  const handleNicknameSubmit = e => {
    e.preventDefault();

    if (!isValidNickname) {
      alert('입력값을 확인해주세요.');

      return;
    }
    requestNicknameUpdate({ nickname }) //
      .then(({ newNickname }) => {
        showSnackbar(CLIENT_MESSAGE.GUIDE.SUCCESS_NICKNAMEUPDATE);
        changeNickname(newNickname);
      })
      .catch(error => {
        alert(CLIENT_MESSAGE.ERROR.FAIL_NICKNAMEUPDATE);
      });
  };

  const handleWithdrawl = e => {
    e.preventDefault();
    alert('회원 탈퇴 기능은 개발 중입니다.');
  };

  return (
    <S.Container>
      <S.WrapperEdit>
        <S.Title>프로필 수정</S.Title>
        <Inputs
          email={email}
          changeEmail={changeEmail}
          isValidEmail={isValidEmail}
          nickname={nickname}
          changeNickname={changeNickname}
          isValidNickname={isValidNickname}
          onEmailSubmit={handleEmailSubmit}
          onNicknameSubmit={handleNicknameSubmit}
        />
      </S.WrapperEdit>
      <WithdrawlModal onWithdrawl={handleWithdrawl} />
    </S.Container>
  );
};

export default MyInfo;
