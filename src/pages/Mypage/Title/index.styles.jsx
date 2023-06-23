import styled from '@emotion/styled';

const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.GREEN_200};
  padding: 1.3rem 0;
  display: flex;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 0.7rem 0;
    justify-content: center;
  }
`;

const Name = styled.h1`
  color: ${({ theme: { colors } }) => colors.GREEN_900};
  font-size: 1.3rem;
  font-weight: bold;
  margin-left: 1.5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 1.2rem;
    margin-left: 0;
  }
`;

export { Container, Name };
