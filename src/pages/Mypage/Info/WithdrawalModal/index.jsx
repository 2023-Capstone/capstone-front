import { useState } from 'react';
import * as S from './index.styles';
import Portal from '@/components/Portal';
const WithdrawalModal = ({ withdraw }) => {
  const [isModal, setIsModal] = useState(false);
  const onModal = () => {
    setIsModal(true);
  };
  const offModal = () => {
    setIsModal(false);
  };
  return (
    <S.Container>
      <S.MainButton onClick={onModal}>회원 탈퇴</S.MainButton>
      <Portal to="modal">
        {isModal && (
          <S.ModalContainer>
            <S.ModalWrapper>
              <p>정말로 회원 탈퇴 하시겠어요?</p>
              <p>탈퇴하시면, 다시 복구하실 수가 없어요!</p>
              <S.ButtonWrapper>
                <S.WithdrawButton onClick={withdraw}>탈퇴하기</S.WithdrawButton>
                <S.CancelButton onClick={offModal}>취소하기</S.CancelButton>
              </S.ButtonWrapper>
            </S.ModalWrapper>
          </S.ModalContainer>
        )}
      </Portal>
    </S.Container>
  );
};

export default WithdrawalModal;
