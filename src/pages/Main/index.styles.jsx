import styled from '@emotion/styled';

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

const Nickname = styled.p`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
`;

const WrapperContent = styled.div`
  flex: 1 1 auto;

  display: grid;
  grid-template-columns: 2fr 1fr;

  width: 90%;
  margin: auto;
  background-color: aliceblue;
`;

const WrapperSide = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 3rem;
`;
export { Container, Nickname, WrapperContent, WrapperSide };
