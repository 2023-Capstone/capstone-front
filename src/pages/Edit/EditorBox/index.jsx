import { useEffect, useState } from 'react';

import { useAtom, useSetAtom } from 'jotai';

import Block from './Block';
import * as S from './index.styles';

import { CLIENT_MESSAGE } from '@/constants/message';
import useDebounce from '@/hooks/useDebounce';
import { blocksAtom } from '@/store/blocks';

const EditorBox = () => {
  const [current, setCurrent] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [blocks, setBlocks] = useAtom(blocksAtom);

  const debounce = useDebounce();
  // const addBlock = useSetAtom(addBlockAtom);
  // const editBlock = useSetAtom(editBlockAtom);
  // const removeBlock = useSetAtom(removeBlockAtom);

  const addBlock = id => {
    setBlocks(() => {
      const newBlocks = [...blocks];
      const index = blocks.findIndex(block => block.id === id);
      if (index === -1) {
        alert(CLIENT_MESSAGE.ERROR.FAIL_FIND_BLOCK);
        return blocks;
      }
      newBlocks.splice(index + 1, 0, {
        type: 'text',
        data: {
          text: '새로운 블럭',
          font: null,
          sort: null,
        },
        id: Date.now(),
      });
      return newBlocks;
    });
  };

  const editBlock = debounce(block => {
    setBlocks(() => {
      const newBlocks = [...blocks];
      const index = blocks.findIndex(({ id }) => id === block.id);
      if (index === -1) {
        alert(CLIENT_MESSAGE.ERROR.FAIL_EDIT_BLOCK);
        return blocks;
      }
      newBlocks.splice(index, 1, block);
      return newBlocks;
    });
  }, 500);

  const removeBlock = id => {
    setBlocks(() => {
      const newBlocks = [...blocks];
      const index = blocks.findIndex(block => block.id === id);
      if (index === -1) {
        alert(CLIENT_MESSAGE.ERROR.FAIL_EDIT_BLOCK);
        return blocks;
      }
      newBlocks.splice(index, 1);
      return newBlocks;
    });
  };

  const changeCurrent = index => () => setCurrent(index);

  const onDragStart = index => setStartIndex(index);

  const onDrop = dropIndex => {
    const dragItem = blocks[startIndex];
    const list = [...blocks];
    list.splice(startIndex, 1);
    const newListData =
      startIndex < dropIndex
        ? [
            ...list.slice(0, dropIndex - 1),
            dragItem,
            ...list.slice(dropIndex - 1, list.length),
          ]
        : [
            ...list.slice(0, dropIndex),
            dragItem,
            ...list.slice(dropIndex, list.length),
          ];
    setBlocks(newListData);
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
          index={index}
          key={`block-${block.id}`}
          current={current}
          changeCurrent={changeCurrent}
          addBlock={addBlock}
          removeBlock={removeBlock}
          editBlock={editBlock}
          onDragStart={onDragStart}
          onDropItem={onDrop}
        />
      ))}
      <Block
        block={{
          type: 'text',
          data: {
            text: '',
            font: null,
            sort: null,
          },
        }}
        index={blocks.length}
        current={current}
        changeCurrent={changeCurrent}
        addBlock={addBlock}
        removeBlock={removeBlock}
        editBlock={editBlock}
        onDragStart={onDragStart}
      />
    </S.Container>
  );
};

export default EditorBox;
