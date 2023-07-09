import styled from '@emotion/styled';

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;

const Nickname = styled.p`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
`;

const WrapperContent = styled.div`
  flex: 1 1 auto;
  width: 90%;

  margin: auto;

  display: grid;
  grid-template-columns: 5fr 2fr;
`;

const WrapperSide = styled.div`
  display: flex;
  flex-direction: column;

  margin: 2rem 0 2rem 3rem;

  > * {
    margin-bottom: 2rem;
  }
`;

export { Container, Nickname, WrapperContent, WrapperSide };
