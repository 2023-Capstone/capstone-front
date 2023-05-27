import styled from '@emotion/styled';

const ContainerList = styled.li`
  list-style: none;
  background-color: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};
  border: 1px solid ${({ theme: { colors } }) => colors.GREEN_500};
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const ContainerGrid = styled.li`
  background-color: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};
  border: 1px solid ${({ theme: { colors } }) => colors.GREEN_500};
  border-radius: 5px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 900;
`;

const Date = styled.span`
  color: ${({ theme: { colors } }) => colors.GREEN_300};
`;

const WrapperImg = styled.div`
  width: 150px;
  height: 200px;
  background-color: #ffb26f;
  margin-bottom: 1rem;
`;

export { ContainerList, ContainerGrid, Title, Date, WrapperImg };
