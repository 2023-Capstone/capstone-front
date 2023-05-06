import React, { useEffect, useState } from 'react';
import Inputs from './Inputs';
import useInput from '@/hooks/useInput';
import { RULE } from '@/constants/rule';
import * as S from './index.styles';
import Title from '../Title';
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
    console.log(email);
  };
  const handleNicknameSubmit = e => {
    e.preventDefault();
    console.log(nickname);
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
      <S.WrapperWithdrawl>
        <button onClick={handleWithdrawl}>회원 탈퇴</button>
      </S.WrapperWithdrawl>
    </S.Container>
  );
};

export default MyInfo;
