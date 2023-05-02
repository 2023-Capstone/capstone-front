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
    background-color: ${({ theme: { colors } }) => colors.GREEN_50};
  }
  /* 선택된 버튼의 css */
  border-bottom: ${props => (props.selected ? '3px' : '0px')} solid
    ${({ theme: { colors } }) => colors.GREEN_900};
  margin-bottom: -2px;
`;

export { Container, Button };
