import styled from '@emotion/styled';

const Container = styled.div`
  width: 80vw;
  height: 100%;
  margin: auto;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    width: 90vw;
  }
`;
const WrapperFilter = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FilterMood = styled.div`
  background-color: #e6e2dd;
  border-radius: 10px;
  width: 60vw;
  padding: 1.5rem;
  margin: 1.5rem 1rem;
`;
const FilterDisplay = styled.div`
  background-color: #e6e2dd;
  border-radius: 10px;
  width: 3vw;
  padding: 1.5rem;
  margin: 1.5rem 1rem;
`;
const Post = styled.div`
  margin: 0 1rem;
`;
const Item = styled.div`
  background-color: #e6e2dd;
  padding: 1.5rem 5vw;
  margin-top: 1rem;
  border-radius: 5px;
`;
const Pagination = styled.div`
  display: flex;
  justify-content: center;

  margin: 2rem 1rem;
`;
const Button = styled.div`
  background-color: #e6e2dd;
  padding: 0.8rem;
  margin-right: 0.5rem;
  border-radius: 5px;
`;

export {
  Container,
  WrapperFilter,
  FilterMood,
  FilterDisplay,
  Post,
  Item,
  Pagination,
  Button,
};
