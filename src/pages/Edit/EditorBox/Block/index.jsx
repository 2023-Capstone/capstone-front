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
  onDragStart,
  onDropItem,
}) => {
  const [content, setContent] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const focusRef = useRef(null);

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

  const onDragStartBlock = () => {
    onDragStart(index);
  };

  const onDragEnter = () => {
    setDragOver(true);
  };

  const onDragLeave = () => {
    setDragOver(false);
  };

  const onDragOver = e => {
    e.preventDefault();
  };

  const onDrop = () => {
    onDropItem(index);
    setDragOver(false);
  };

  return (
    <S.Container
      dragOver={dragOver}
      draggable
      onDragStart={onDragStartBlock}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onKeyDown={handleBlock}
    >
      <AiOutlinePlus className="add" onClick={onClickNewBlock} />
      <MdDragIndicator className="drag" />
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
