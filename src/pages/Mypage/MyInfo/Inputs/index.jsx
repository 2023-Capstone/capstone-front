import React from 'react';
import * as S from './index.styles';
import { RULE } from '@/constants/rule';
import Button from './Button';

const Inputs = ({
  email,
  changeEmail,
  isValidEmail,
  nickname,
  changeNickname,
  isValidNickname,
  onEmailSubmit,
  onNicknameSubmit,
}) => {
  return (
    <S.Container>
      <S.Form onSubmit={onEmailSubmit}>
        <label>이메일</label>
        <S.Input
          type="email"
          value={email}
          onChange={changeEmail}
          className={isValidEmail ? '' : 'invalid'}
          required
        />
        <S.Button>
          <Button />
        </S.Button>
        <S.Description className={isValidEmail ? '' : 'invalid'}>
          이메일 형식이 올바르지 않아요.
        </S.Description>
      </S.Form>

      <S.Form onSubmit={onNicknameSubmit}>
        <label>닉네임</label>
        <S.Input
          type="text"
          value={nickname}
          onChange={changeNickname}
          className={isValidNickname ? '' : 'invalid'}
          required
        />
        <S.Button>
          <Button />
        </S.Button>
        <S.Description className={isValidNickname ? '' : 'invalid'}>
          닉네임은 {RULE.NICKNAME.MIN} ~ {RULE.NICKNAME.MAX}자까지 입력할 수
          있어요.
        </S.Description>
      </S.Form>
    </S.Container>
  );
};

export default Inputs;
