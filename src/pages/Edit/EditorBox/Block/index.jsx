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
  focusId,
  changeFocus,
  dragStart,
  onDropItem,
}) => {
  const [dragOver, setDragOver] = useState(false);
  const content = useRef('');
  const focusRef = useRef(null);

  useEffect(() => {
    if (!focusRef || focusId !== block.id) return;

    focusRef.current.focus();

    setEndContentEditable(focusRef.current);
  }, [focusId, block.id]);

  const changeContent = e => {
    content.current = e.target.value;
    editBlock();
  };

  const makeNewBlock = () => {
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

  const controlDrag = action => e => {
    switch (action) {
      case 'enter':
        setDragOver(true);
        break;
      case 'leave':
        setDragOver(false);
        break;
      case 'over':
        e.preventDefault();
        break;
      case 'drop':
        onDropItem(index);
        setDragOver(false);
        break;
      default:
      //none
    }
  };

  return (
    <S.Container
      dragOver={dragOver}
      draggable
      onDragStart={dragStart(index)}
      onDragOver={controlDrag('over')}
      onDragEnter={controlDrag('enter')}
      onDragLeave={controlDrag('leave')}
      onDrop={controlDrag('drop')}
      onKeyDown={controlBlock}
    >
      <S.BlockButtonWrap className="block-button">
        <AiOutlinePlus className="add" onClick={makeNewBlock} />
        <MdDragIndicator className="drag" onClick={changeFocus(block.id)} />
      </S.BlockButtonWrap>
      <ContentEditable
        className="content-editable"
        placeholder="새로운 블럭은 Shift+Enter를 눌러주세요"
        html={content.current}
        innerRef={focusRef}
        onChange={changeContent}
        onFocus={changeFocus(block.id)}
      />
    </S.Container>
  );
};

export default Block;