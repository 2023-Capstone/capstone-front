import styled from '@emotion/styled';

const Container = styled.ul`
  display: flex;
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.GREEN_200};
`;

const Button = styled.button`
  background-color: transparent;
  padding: 0.5rem 1.5rem;
  color: ${({ theme: colors }) => colors.GREEN_900};
  font-size: 1.2rem;

  &:hover {
    border-bottom: 3px solid ${({ theme: { colors } }) => colors.GREEN_900};
    margin-bottom: -3px;
  }
`;

export { Container, Button };
