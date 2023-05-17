import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 0.25rem;
  font-size: 1.25rem;
  border-top: ${({ dragOver }) => (dragOver ? '2px solid black' : 'none')};
  .add {
    cursor: pointer;
  }
  .drag {
    cursor: grab;
  }
  .contentEditable {
    height: fit-content;
    cursor: text;
    outline: 0px solid transparent;
  }
  .contentEditable:empty:before {
    content: attr(placeholder);
    opacity: 0.3;
  }
`;
export { Container };
