import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.5rem;
  width: 100%;
`;

const Input = styled.input`
  height: 2rem;
  flex-grow: 4;
  background: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};
`;

const DateBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: large;
  gap: 1rem;
`;

const DateInfo = styled.div`
  display: flex;
  width: 100%;

  span {
    display: block;
    &:first-child {
      width: 35%;
      text-align: center;
    }
    &:last-child {
      width: 65%;
      text-align: start;
    }
  }

  select {
    border: 1px solid ${({ theme: { colors } }) => colors.GREEN_500};
    width: 3rem;
    border-radius: 8px;
    &:focus {
      outline: none;
    }
  }
`;

export { Container, Input, DateBox, DateInfo };
