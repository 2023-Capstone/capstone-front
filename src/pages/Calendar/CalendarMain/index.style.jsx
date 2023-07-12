import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
  min-height: 3.25rem;
  color: ${({ day, theme }) =>
    day === '일'
      ? theme.colors.RED_500
      : day === '토'
      ? theme.colors.BLUE_500
      : theme.colors.GREEN_700};
`;

const Date = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: 5px;
  font-weight: 600;
  font-size: 1.25rem;
  padding: 1rem 1rem;
  min-height: 3.25rem;
  grid-column-start: ${({ date, startDate }) =>
    date === 0 ? startDate : 'auto'};

  &:hover {
    background-color: ${({ theme }) => theme.colors.GREEN_100};
  }

  &:hover .desc {
    display: block;
  }
`;

const DescBox = styled.div`
  display: none;
  position: absolute;
  bottom: 0rem;
  background-color: #d9d9d9;
  padding: 0.725rem 2rem;
  border-radius: 10px;

  transition: all 0.4s ease-in-out;
  font-size: 0.725rem;
  font-weight: 400;
`;

const DateTitle = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DateInfo = styled.span`
  flex-grow: 2;
  color: ${({ date, startDate, theme }) =>
    (date + startDate) % 7 === 0
      ? theme.colors.RED_500
      : (date + startDate) % 7 === 1
      ? theme.colors.BLUE_500
      : theme.colors.GREEN_700};
`;

const Mood = styled.div``;

export { Container, DayBox, Day, Date, DescBox, DateTitle, DateInfo, Mood };
