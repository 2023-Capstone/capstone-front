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
  padding: 0 6rem;
  padding-top: 4rem;
`;

const BtnBox = styled.div`
  min-width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

export { Container, BtnBox };
