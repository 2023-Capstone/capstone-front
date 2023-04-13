import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.5rem;
  width: 100%;
  @media screen and (${({ theme: { screenSizes } }) => screenSizes.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Input = styled.input`
  height: 2rem;
  flex-grow: 4;
  background: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};

  @media screen and (${({ theme: { screenSizes } }) => screenSizes.mobile}) {
    width: 100%;
    height: 1.25rem;
  }
`;

const DateBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: large;
  gap: 1rem;

  @media screen and (${({ theme: { screenSizes } }) => screenSizes.mobile}) {
    width: 80%;
    font-size: medium;
    gap: 0.735rem;
  }
`;

const DateInfo = styled.div`
  display: flex;
  width: 100%;

  span {
    display: block;
    &:first-of-type {
      width: 35%;
      text-align: center;
    }
    &:last-of-type {
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
  @media screen and (${({ theme: { screenSizes } }) => screenSizes.mobile}) {
    width: 90%;
    gap: 2rem;
    span {
      display: block;
      &:first-of-type {
        width: 35%;
        text-align: center;
      }
      &:last-of-type {
        width: 65%;
        text-align: start;
      }
    }
  }
`;

export { Container, Input, DateBox, DateInfo };
