import styled from '@emotion/styled';

const Container = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  width: 100%;
  min-height: 100%;
  padding: 4rem 6rem;
`;

const BtnBox = styled.div`
  min-width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;

  button {
    padding: 0.75rem 2rem;
    border-radius: 10px;
    font-weight: 800;
    font-size: 1.15rem;
  }
  button:first-child {
    color: #ffffff;
    background-color: ${({ theme: { colors } }) => colors.GREEN_500};
  }
  button:last-child {
    color: ${({ theme: { colors } }) => colors.GREEN_500};
    background-color: ${({ theme: { colors } }) => colors.GREEN_100};
  }
`;

export { Container, BtnBox };
