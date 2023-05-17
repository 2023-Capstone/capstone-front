import { atom } from 'jotai';

//기본 블록인데 이거는 어디에다가 두면 좋을지?
const initialBlock = {
  type: 'text',
  data: {
    text: '',
    font: null,
    sort: null,
  },
};

const blocksAtom = atom([{ ...initialBlock, id: Date.now() }]);

export { blocksAtom };
