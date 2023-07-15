import styled from '@emotion/styled';

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  position: relative;
`;

const Nickname = styled.p`
  color: ${({ theme: { colors } }) => colors.GREEN_500};

  position: absolute;
  top: 1.5rem;
  right: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    top: 3rem;
  }
`;

const WrapperContent = styled.div`
  flex: 1 1 auto;
  width: 90%;

  margin: auto;

  display: grid;
  grid-template-columns: 5fr 2fr;
  grid-gap: 4rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    grid-gap: 2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: flex;
    flex-direction: column;
  }
`;

const WrapperSide = styled.div`
  display: flex;
  flex-direction: column;

  margin: 2rem 0 0 0;

  > * {
    margin-bottom: 2rem;
  }
`;

export { Container, Nickname, WrapperContent, WrapperSide };
