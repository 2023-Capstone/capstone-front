import { useEffect, useRef, useState } from 'react';

import ContentEditable from 'react-contenteditable';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdDragIndicator } from 'react-icons/md';

import * as S from './index.styles';

import { setEndContentEditable } from '@/utils/contentEditable';

const Block = ({
  block,
  index,
  addBlock,
  removeBlock,
  editBlock,
  current,
  changeFocus,
  onDragStart,
  onDropItem,
}) => {
  const [content, setContent] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const focusRef = useRef(null);

  useEffect(() => {
    if (!focusRef || current !== block.id) return;
    focusRef.current.focus();
    try {
      setEndContentEditable(focusRef.current);
    } catch (e) {
      console.error(`focusing error: ${e.message}`);
    }
  }, [current, block, content]);

  const onChangeContent = e => {
    setContent(e.target.value);
    editBlock({ ...block, data: { ...block.data, text: e.target.value } });
  };

  const onClickNewBlock = () => {
    addBlock(block.id);
  };

  const controlBlock = e => {
    if (e.key !== 'Backspace' && e.key !== 'Enter') return;
    switch (e.key) {
      case 'Enter':
        if (!e.shiftKey) return;
        console.log('실행');
        e.preventDefault();
        addBlock(block.id);
        break;
      case 'Backspace':
        if (content.length > 0) return;
        e.preventDefault();
        removeBlock(block.id);
        break;
      default:
        return;
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
      onKeyDown={controlBlock}
    >
      <AiOutlinePlus className="add" onClick={onClickNewBlock} />
      <MdDragIndicator className="drag" />
      <ContentEditable
        className="contentEditable"
        placeholder="내용을 입력해주세요"
        html={block.data.text}
        innerRef={focusRef}
        onChange={onChangeContent}
        onFocus={changeFocus(block.id)}
      />
    </S.Container>
  );
};

export default Block;
