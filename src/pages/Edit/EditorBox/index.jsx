import { useState } from 'react';

import Block from './Block';
import * as S from './index.styles';

const EditorBox = ({ blocks, addBlock, updateBlock, removeBlock }) => {
  const [current, setCurrent] = useState(0);

  const addNewTextBlock = () => {
    setCurrent(current + 1);
    addBlock({
      type: 'text',
      data: {
        text: '',
        font: null,
        sort: null,
      },
    });
  };

  return (
    <S.Container>
      <S.EditELementBox>
        <p>Sans-serif</p>
        <p>H</p>
        <p>
          <b>B</b>
        </p>
        <p>
          <i>I</i>
        </p>
        <p>
          <ins>U</ins>
        </p>
        <p>
          <strike>S</strike>
        </p>
        <p>{'< >'}</p>
        <p>줄간격</p>
        <p>이미지</p>
      </S.EditELementBox>
      {blocks.map((block, index) => (
        <Block
          block={block}
          key={`block-${index}`}
          current={current}
          index={index}
          addBlock={addNewTextBlock}
          removeBlock={removeBlock}
          updateBlock={updateBlock}
        />
      ))}
    </S.Container>
  );
};

export default EditorBox;
