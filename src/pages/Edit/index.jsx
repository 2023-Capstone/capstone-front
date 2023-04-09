import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import EditorBox from './EditorBox';
import HashtagBox from './HashtagBox';
import * as S from './index.styles';
import TitleInput from './TitleInput';

import useSnackbar from '@/hooks/useSnackbar';
import { useWeather } from '@/hooks/useWeather';

const Editor = () => {
  const [hashtagList, setHashtagList] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(null);
  const [weather, setWeather] = useState('');
  const [mood, setMood] = useState('');

  const navigate = useNavigate();
  const { getWeather } = useWeather();
  useEffect(() => {
    setWeather(() => getWeather());
  }, [getWeather]);
  const { showSnackbar } = useSnackbar();
  useEffect(() => {
    setDate(() => new Date());
  }, []);

  const onChangeTitle = e => {
    setTitle(() => e.target.value);
  };
  const onChangeMood = e => {
    setMood(() => e.target.value);
  };

  const onClickCancelBtn = () => {
    navigate('/');
  };

  const onClickPostBtn = () => {
    // 등록 버튼 제작 필요
  };
  return (
    <S.Container>
      {/* //에디터 박스 윗부분 */}
      <TitleInput
        title={title}
        setTitle={onChangeTitle}
        date={date}
        weather={weather}
        mood={mood}
        setMood={onChangeMood}
      />
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
        <button onClick={onClickPostBtn}>작성</button>
        <button onClick={onClickCancelBtn}>취소</button>
      </S.BtnBox>
    </S.Container>
  );
};

export default Editor;
