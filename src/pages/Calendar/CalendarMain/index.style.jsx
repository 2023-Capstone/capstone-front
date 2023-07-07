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
  color: ${({ day }) =>
    day === '일' ? 'red' : day === '토' ? 'blue' : 'black'};
  grid-column-start: ${({ day, startDate }) =>
    day === 1 ? startDate : 'auto'};
`;

export { Container, DayBox, Day };
