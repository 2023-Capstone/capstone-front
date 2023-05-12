import { useEffect, useRef, useState } from 'react';

import ContentEditable from 'react-contenteditable';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdDragIndicator } from 'react-icons/md';

import * as S from './index.styles';

const Block = ({
  block,
  addBlock,
  removeBlock,
  editBlock,
  current,
  changeCurrent,
  index,
}) => {
  const [content, setContent] = useState('');
  const focusRef = useRef();

  // useEffect(() => {
  //   if (!focusRef && current !== index) return;
  //   focusRef.current.focus();
  // }, [current, index]);

  const onChangeContent = e => {
    setContent(e.target.value);
    editBlock({ ...block, data: { ...block.data, text: e.target.value } });
  };

  const onClickNewBlock = () => {
    addBlock(block.id);
  };

  const handleBlock = e => {
    if (e.key !== 'Enter' && e.key !== 'Backspace') return;
    if (e.key === 'Enter') {
      e.preventDefault();
      addBlock(block.id);
    }
    if (e.key === 'Backspace') {
      if (content.length > 0) return;
      e.preventDefault();
      removeBlock(block.id);
    }
  };

  return (
    <S.Container draggable onKeyDown={handleBlock}>
      <AiOutlinePlus onClick={onClickNewBlock} />
      <MdDragIndicator />
      <ContentEditable
        className="contentEditable"
        placeholder="내용을 입력해주세요"
        html={content}
        onChange={onChangeContent}
        innerRef={focusRef}
      />
    </S.Container>
  );
};

export default Block;
