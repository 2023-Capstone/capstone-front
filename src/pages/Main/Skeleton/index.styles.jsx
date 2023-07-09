import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fade = keyframes`
  0%, 100%{
    opacity:1;
  }
  50%{
    opacity: 0.5;
  }
`;

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  animation: ${fade} 1.5s infinite ease-out;
`;

const Header = styled.div`
  background-color: ${({ theme: { colors } }) => colors.SKELETON};
  padding: 2rem;
`;

const WrapperContent = styled.div`
  flex: 1 1 auto;
  width: 90%;

  margin: auto;

  display: grid;
  grid-template-columns: 5fr 2fr;
`;

const RandomDiary = styled.div`
  margin: 2rem;
  background-color: ${({ theme: { colors } }) => colors.SKELETON};
  border-radius: 10px;
`;

const SideBar = styled.div`
  margin: 2rem;

  display: grid;
  grid-template-rows: 1fr 2fr 2fr;

  div {
    margin-bottom: 2rem;
    background-color: ${({ theme: { colors } }) => colors.SKELETON};
    border-radius: 10px;
  }
`;

export { Container, Header, WrapperContent, RandomDiary, SideBar };
