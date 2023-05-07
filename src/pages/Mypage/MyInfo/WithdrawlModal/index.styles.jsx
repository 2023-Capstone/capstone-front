import styled from '@emotion/styled';

const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: end;
  margin-top: 10rem;
`;

const Mainbutton = styled.button`
  width: 6rem;
  padding: 0.7rem 1rem;
  border-radius: 5px;
  background-color: ${({ theme: { colors } }) => colors.GREEN_50};
  color: ${({ theme: { colors } }) => colors.RED_200};

  transition: background-color 0.5s ease-in-out;
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.RED_200};
    color: ${({ theme: { colors } }) => colors.GREEN_50};
  }
`;

const ModalContainer = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.GREEN_900_OP_40};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 30rem;
  height: 20rem;
  background-color: ${({ theme: { colors } }) => colors.GREEN_700};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: blowUp 0.1s;

  & > p:first-of-type {
    color: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};
    font-weight: 800;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  & > p:nth-of-type(2) {
    color: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};
    font-size: 1.1rem;
  }
`;

const Buttons = styled.div`
  margin-top: 2rem;

  & button {
    padding: 0.8rem 2rem;
    border-radius: 5px;
    font: 1.1rem;
    font-weight: bold;
    transition: all 0.5s ease-out;
  }
  & > button:first-of-type {
    background-color: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};
    color: ${({ theme: { colors } }) => colors.GREEN_900};
    margin-right: 4rem;
    &:hover {
      filter: brightness(0.8);
    }
  }
  & > button:nth-of-type(2) {
    background-color: ${({ theme: { colors } }) => colors.GREEN_800};
    color: ${({ theme: { colors } }) => colors.GREEN_600};
    &:hover {
      filter: brightness(1.2);
    }
  }

  @keyframes blowUp {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export { Container, Mainbutton, ModalContainer, ModalWrapper, Buttons };
