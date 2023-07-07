import styled from '@emotion/styled';

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 2rem 2rem;
`;

const DayBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.25rem;
  color: ${({ day, theme }) =>
    day === '일' ? 'red' : day === '토' ? 'blue' : theme.colors.GREEN_700};
`;

const Date = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1.25rem;
  grid-column-start: ${({ date, startDate }) =>
    date === 0 ? startDate : 'auto'};
  color: ${({ date, startDate, theme }) =>
    (date + startDate) % 7 === 0
      ? 'blue'
      : (date + startDate) % 7 === 1
      ? 'red'
      : theme.colors.GREEN_700};

  &:hover {
    background-color: ${({ theme }) => theme.colors.GREEN_100};
  }
`;

export { Container, DayBox, Day, Date };
