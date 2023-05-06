import React, { useState } from 'react';
import * as S from './index.styles';
const WithdrawlModal = ({ onWithdrawl }) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <S.Container>
      <S.Mainbutton
        onClick={() => {
          setIsModal(true);
        }}
      >
        회원 탈퇴
      </S.Mainbutton>
      {isModal && (
        <S.ModalContainer>
          <S.ModalWrapper>
            <p>정말로 회원 탈퇴 하시겠어요?</p>
            <p>탈퇴하시면, 다시 복구하실 수가 없어요!</p>
            <S.Buttons>
              <button onClick={() => setIsModal(false)}>취소하기</button>
              <button onClick={onWithdrawl}>탈퇴하기</button>
            </S.Buttons>
          </S.ModalWrapper>
        </S.ModalContainer>
      )}
    </S.Container>
  );
};

export default WithdrawlModal;
