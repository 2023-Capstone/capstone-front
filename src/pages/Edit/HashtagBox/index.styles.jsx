import styled from '@emotion/styled';

const Container = styled.div`
  min-width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;

  border: 0.5px solid ${({ theme: { colors } }) => colors.GREEN_500};
  background: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};
  border-radius: 10px;
  padding: 0 0.5rem;
  font-size: 1.25rem;
  label {
    color: ${({ theme: { colors } }) => colors.GREEN_500};
    font-weight: 700;
  }
  input {
    border: none;
    border-radius: 10px;
  }
`;
export { Container, InputBox };
