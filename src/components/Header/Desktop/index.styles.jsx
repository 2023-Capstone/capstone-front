import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 3.7rem;

  background: ${({ theme: { colors } }) => colors.GREEN_500};

  padding: 1rem 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;
`;

const Button = styled.button`
  background: none;

  padding: 0;

  img {
    width: 70%;
  }
`;

export { Container, Wrapper, Button };
