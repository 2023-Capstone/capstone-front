import { useEffect, useRef, useState } from 'react';

import ContentEditable from 'react-contenteditable';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdDragIndicator } from 'react-icons/md';

import * as S from './index.styles';

const Block = ({ addBlock, removeBlock, updateBlock, current, index }) => {
  const [content, setContent] = useState('');
  const focusRef = useRef();

  useEffect(() => {
    if (!focusRef && current !== index) return;
    focusRef.current.focus();
  }, [current, index]);

  const onChangeContent = e => {
    setContent(e.target.value);
  };

  const handleBlock = e => {
    if (e.key !== 'Enter' && e.key !== 'Backspace') return;
    if (e.key === 'Enter') {
      e.preventDefault();
      addBlock();
    }
    if (e.key === 'Backspace') {
      if (content.length > 0) return;
      console.log('삭제');
      e.preventDefault();
      removeBlock(index);
    }
  };

  return (
    <S.Container draggable onKeyDown={handleBlock}>
      <AiOutlinePlus onClick={addBlock} />
      <MdDragIndicator />
      <ContentEditable
        className="contentEditable"
        placeholder="내용을 입력해주세요"
        html={content}
        onChange={onChangeContent}
        innerRef={focusRef}
        onBlur={updateBlock(index, content)}
      />
    </S.Container>
  );
};

export default Block;
