import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const showBtn = keyframes`
  0%{
    opacity: 0;
  }
  30%{
    opacity: 1;
  }
  60%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 0.25rem;
  font-size: 1.25rem;
  border-top: 2px solid ${({ dragOver }) => (dragOver ? 'black' : '#FFF')};

  .contentEditable {
    height: fit-content;
    width: 93%;
    cursor: text;
    word-break: break-all;
    outline: 0px solid transparent;
  }

  .contentEditable:empty:before {
    content: attr(placeholder);
    opacity: 0.3;
  }

  :hover .blockButton {
    opacity: 1;
  }
`;

const BlockButton = styled.div`
  animation: ${showBtn} 2s;
  opacity: 0;
  transition: all 0.2s ease-in;

  .add {
    cursor: pointer;
  }

  .drag {
    cursor: grab;
  }
`;
export { Container, BlockButton };
