import styled from '@emotion/styled';

const Container = styled.div`
  min-width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;
  @media screen and (${({ theme: { screenSizes } }) => screenSizes.mobile}) {
    flex-direction: column;
    gap: 1.25rem;
  }
`;

const InputBox = styled.div`
  @media screen and (${({ theme: { screenSizes } }) => screenSizes.mobile}) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const GuideLineDesktop = styled.div`
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

const GuideLineMobile = styled.div`
  display: none;
  font-size: x-small;
  line-height: 0.725rem;
  text-align: end;
  color: ${({ theme: { colors } }) => colors.GREEN_500};
  @media screen and (${({ theme: { screenSizes } }) => screenSizes.mobile}) {
    display: block;
  }
`;

const Input = styled.div`
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

  @media screen and (${({ theme: { screenSizes } }) => screenSizes.mobile}) {
    width: 5rem;
    label {
      &:hover div {
        display: none;
      }
    }
    input {
      width: 100%;
      border: none;
      border-radius: 10px;
    }
  }
`;

const HashtagList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Hashtag = styled.p`
  font-size: 1.25rem;
  color: #777777;
  transition: all 0.3s ease-in;
  cursor: pointer;
  &:hover {
    color: ${({ theme: { colors } }) => colors.GREEN_500};
  }
  @media screen and (${({ theme: { screenSizes } }) => screenSizes.mobile}) {
    font-size: 1rem;
  }
`;
export {
  Container,
  InputBox,
  Input,
  Hashtag,
  GuideLineDesktop,
  GuideLineMobile,
  HashtagList,
};
