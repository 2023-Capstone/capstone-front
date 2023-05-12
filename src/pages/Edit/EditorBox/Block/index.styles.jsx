import styled from '@emotion/styled';

const Container = styled.div`
  margin: 0.725rem 0.75rem;
  display: flex;
  gap: 0.25rem;
  font-size: 1.25rem;
  .add {
    cursor: pointer;
  }
  .drag {
    cursor: grab;
  }
  .contentEditable {
    cursor: text;
  }
  .contentEditable:empty:before {
    content: attr(placeholder);
  }
`;
export { Container };
