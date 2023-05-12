import { atom } from 'jotai';

import { CLIENT_MESSAGE } from '@/constants/message';

//기본 블록인데 이거는 어디에다가 두면 좋을지?
const block = {
  type: 'text',
  data: {
    text: '새로운 블럭',
    font: null,
    sort: null,
  },
};

const blocksAtom = atom([{ ...block, id: Date.now() }]);

//이 부분은 궁금한 게 있어서 남겨놓을게요!
const addBlockAtom = atom(null, (get, set, update) =>
  set(blocksAtom, () => {
    const blocks = get(blocksAtom);
    const index = blocks.findIndex(block => block.id === update);
    if (index === -1) {
      alert(CLIENT_MESSAGE.ERROR.FAIL_FIND_BLOCK);
      return blocks;
    }
    blocks.splice(index + 1, 0, { ...block, id: Date.now() });
    return blocks;
  }),
);

const removeBlockAtom = atom(null, (get, set, update) =>
  set(blocksAtom, () => {
    const blocks = get(blocksAtom);
    const index = blocks.findIndex(block => block.id === update);
    if (index === -1) {
      alert(CLIENT_MESSAGE.ERROR.FAIL_DELETE_BLOCK);
      return blocks;
    }
    blocks.splice(index, 1);
    return blocks;
  }),
);

const editBlockAtom = atom(null, (get, set, update) =>
  set(blocksAtom, () => {
    const blocks = get(blocksAtom);
    const index = blocks.findIndex(block => block.id === update.id);
    if (index === -1) {
      alert(CLIENT_MESSAGE.ERROR.FAIL_EDIT_BLOCK);
      return blocks;
    }
    blocks.splice(index, 1, update);
    return blocks;
  }),
);

export { blocksAtom, addBlockAtom, removeBlockAtom, editBlockAtom };
