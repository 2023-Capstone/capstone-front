import React, { useEffect, useState } from 'react';

import EditorBox from './EditorBox';
import HashtagBox from './HashtagBox';
import * as S from './index.styles';
import TitleInput from './TitleInput';

import useSnackbar from '@/hooks/useSnackbar';
import { useWeather } from '@/hooks/useWeather';

const Editor = () => {
  const [hashtagList, setHashtagList] = useState([]);
  const [date, setDate] = useState(null);
  const [weather, setWeather] = useState('');

  const { getWeather } = useWeather();
  useEffect(() => {
    setWeather(() => getWeather());
  }, [getWeather]);
  const { showSnackbar } = useSnackbar();
  useEffect(() => {
    setDate(() => new Date());
  }, []);
  return (
    <S.Container>
      {/* //에디터 박스 윗부분 */}
      <TitleInput date={date} weather={weather} />
      {/* //에디터 박스 부분 */}
      <EditorBox />
      {/* //해시태그 부분 */}
      <HashtagBox
        hashtagList={hashtagList}
        setHashtagList={setHashtagList}
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
