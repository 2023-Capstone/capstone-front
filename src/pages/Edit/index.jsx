import React, { useState } from 'react';

import EditorBox from './EditorBox';
import HashtagBox from './HashtagBox';
import * as S from './index.styles';
import TitleInput from './TitleInput';

import useSnackbar from '@/hooks/useSnackbar';

const Editor = () => {
  const [hashtagList, setHashtagList] = useState([]);
  const [newHashtag, setNewHashtag] = useState('');
  const { showSnackbar } = useSnackbar();
  return (
    <S.Container>
      {/* //에디터 박스 윗부분 */}
      <TitleInput />
      {/* //에디터 박스 부분 */}
      <EditorBox />
      {/* //해시태그 부분 */}
      <HashtagBox
        hashtagList={hashtagList}
        setHashtagList={setHashtagList}
        newHashtag={newHashtag}
        setNewHashtag={setNewHashtag}
        showSnackbar={showSnackbar}
      />
      {/* //작성 및 취소 버튼 */}
      <S.BtnBox>
        <button>작성</button>
        <button>취소</button>
      </S.BtnBox>
    </S.Container>
  );
};

export default Editor;
