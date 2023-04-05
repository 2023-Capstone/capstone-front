import styled from '@emotion/styled';

const Container = styled.div`
  min-width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;
`;
const GuideLine = styled.div`
  width: 12rem;
  padding: 0.525rem;

  position: absolute;
  display: none;
  top: -4rem;

  font-size: x-small;
  line-height: 0.725rem;
  text-align: center;

  background-color: rgba(217, 217, 217, 0.7);
  border-radius: 10px;
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
    position: relative;
    color: ${({ theme: { colors } }) => colors.GREEN_500};
    font-weight: 700;
    &:hover div {
      display: block;
    }
  }
  input {
    border: none;
    border-radius: 10px;
  }
`;

const Hashtag = styled.p`
  font-size: 1.25rem;
  color: black;
  transition: all 0.3s ease-in;
  cursor: pointer;
  &:hover {
    color: ${({ theme: { colors } }) => colors.GREEN_500};
  }
`;
export { Container, InputBox, Hashtag, GuideLine };
