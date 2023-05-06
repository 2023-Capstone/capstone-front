import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const WrapperEdit = styled.div`
  flex: 1 1 auto;
  width: 70%;
  margin-top: 5rem;
`;

const Title = styled.h1`
  color: ${({ theme: { colors } }) => colors.GREEN_900};
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 3rem;
`;

const WrapperWithdrawl = styled.div`
  width: 70%;
  display: flex;
  justify-content: end;
  margin-top: 10rem;

  & > button {
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
  }
`;

export { Container, WrapperEdit, Title, WrapperWithdrawl };
