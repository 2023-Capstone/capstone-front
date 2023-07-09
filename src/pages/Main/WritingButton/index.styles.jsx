import styled from '@emotion/styled';

const Button = styled.button`
  background-color: ${({ theme: { colors } }) => colors.GREEN_300};
  color: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};
  font-size: 1.2rem;
  padding: 0.5rem;

  border: 3px solid ${({ theme: { colors } }) => colors.GREEN_400};
  border-radius: 5px;
`;

export { Button };
