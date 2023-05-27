import styled from '@emotion/styled';

const Container = styled.div`
  li {
    list-style: none;
  }

  display: flex;
  justify-content: center;
  background-color: ${({ theme: { colors } }) => colors.GREEN_100};
  padding: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  background-color: transparent;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  margin-right: 0.5rem;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.GREEN_400};
    transition: background-color 0.5s ease;
  }

  &.selected {
    font-weight: bold;
  }
`;
export { Container, Button };
