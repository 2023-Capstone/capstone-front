import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 1.725rem 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.GREEN_50};
  font-size: 1.25rem;
`;

const MoveBtn = styled.div`
  width: 1.725rem;
  height: 1.725rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.GREEN_700};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.GREEN_700};
`;

const SelectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SelecedValue = styled.button`
  background-color: inherit;
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.GREEN_500};
`;

const SelectBox = styled.ul`
  z-index: 1;
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  top: 3rem;

  border: 1px solid ${({ theme }) => theme.colors.GREEN_500};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.GREEN_500};
  background-color: ${({ theme }) => theme.colors.INPUT_BACKGROUND};
  font-weight: 600;
  font-size: 1.25rem;
  overflow: hidden;

  height: 10rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SelectOption = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.GREEN_500 : 'none'};
  color: ${({ selected }) => (selected ? '#fff' : 'none')};
  padding: 0.625rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.GREEN_500};
    color: #fff;
  }
`;

const CountBox = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-weight: 600;
`;
export {
  Container,
  MoveBtn,
  SelectContainer,
  SelecedValue,
  SelectBox,
  SelectOption,
  CountBox,
};
