import React from 'react';

import EditorBox from './EditorBox';
import HashtagBox from './HashtagBox';
import * as S from './index.styles';
import TitleInput from './TitleInput';

const Editor = () => {
  return (
    <S.Container>
      {/* //에디터 박스 윗부분 */}
      <TitleInput />
      {/* //에디터 박스 부분 */}
      <EditorBox />
      {/* //해시태그 부분 */}
      <HashtagBox />
      {/* //맨 밑에 작성하기 버튼 */}
      <S.BtnBox></S.BtnBox>
    </S.Container>
  );
};

export default Editor;
