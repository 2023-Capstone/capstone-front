import styled from '@emotion/styled';

const Container = styled.li`
  list-style: none;
  & > * {
    background-color: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};
    border: 1px solid ${({ theme: { colors } }) => colors.GREEN_500};
    border-radius: 5px;
    padding: 1rem;

    display: flex;
    align-items: center;
  }
  & > *:hover {
    cursor: pointer;
  }
`;
const WrapperList = styled.div`
  justify-content: space-between;
  margin-top: 1rem;
`;

const WrapperGrid = styled.div`
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 900;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${props => {
    if (props.grid) return `margin-bottom: 0.3rem`;
  }}
`;

const Date = styled.span`
  color: ${({ theme: { colors } }) => colors.GREEN_300};
`;

const WrapperImg = styled.div`
  width: 150px;
  height: 200px;
  background-color: #ffb26f;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  overflow: hidden;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export { Container, WrapperList, WrapperGrid, Title, Date, WrapperImg };