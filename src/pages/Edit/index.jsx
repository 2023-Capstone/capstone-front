import React from 'react';

import EditorBox from './EditorBox';
import HashtagBox from './HashtagBox';
import * as S from './index.styles';
import TitleInput from './TitleInput';

const Editor = () => {
  return (
    <>
      <S.Container>
        <S.EditorHeader>
          <TitleInput />
          <S.DiaryInfo>
            <p>date: 2023/3/6(sun)</p>
            <p>weather: d</p>
            <p>
              mood:
              <select>
                <option value="best">😀</option>
                <option value="good">🙂</option>
                <option value="medium">😐</option>
                <option value="bad">🙁</option>
                <option value="worst">😞</option>
              </select>
            </p>
          </S.DiaryInfo>
        </S.EditorHeader>
        <EditorBox />
        <HashtagBox />
      </S.Container>
    </>
  );
};

export default Editor;
