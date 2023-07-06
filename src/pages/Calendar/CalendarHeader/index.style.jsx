import styled from '@emotion/styled';

const Container = styled.div`
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
  border: 2px solid ${({ theme }) => theme.colors.GREEN_700};
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.GREEN_500};
`;

const SelectBox = styled.ul``;

const SelectOption = styled.li``;
export {
  Container,
  MoveBtn,
  SelectContainer,
  SelecedValue,
  SelectBox,
  SelectOption,
};
