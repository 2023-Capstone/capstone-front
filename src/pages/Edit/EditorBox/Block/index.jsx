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
  const content = useRef('');
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
  }, [current, block]);

  const onChangeContent = e => {
    content.current = e.target.value;
  };

  const onClickNewBlock = () => {
    addBlock(block.id);
  };

  const controlBlock = e => {
    switch (e.key) {
      case 'Enter':
        if (!e.shiftKey) return;
        e.preventDefault();
        addBlock(block.id);
        break;
      case 'Backspace':
        if (content.current.length > 0 && content.current !== '<br>') return;
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

  const saveContent = () => {
    if (block.data.text === content.current) return;
    editBlock({ ...block, data: { ...block.data, text: content.current } });
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
      <S.BlockButton className="blockButton">
        <AiOutlinePlus className="add" onClick={onClickNewBlock} />
        <MdDragIndicator className="drag" />
      </S.BlockButton>
      <ContentEditable
        className="contentEditable"
        placeholder="내용을 입력해주세요"
        html={content.current}
        innerRef={focusRef}
        onChange={onChangeContent}
        onFocus={changeFocus(block.id)}
        onBlur={saveContent}
      />
    </S.Container>
  );
};

export default Block;
