import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import EditorBox from './EditorBox';
import HashtagBox from './HashtagBox';
import * as S from './index.styles';
import Title from './Title';

import useInput from '@/hooks/useInput';
import useWeather from '@/hooks/useWeather';

const Edit = () => {
  const date = new Date();
  const [hashtagList, setHashtagList] = useState([]);
  const [weather, setWeather] = useState('');
  const [mood, onChangeMood] = useInput('');
  const [title, onChangeTitle] = useInput('');
  const [newHashtag, onChangeNewHashtag, resetNewHashtag] = useInput('');

  const navigate = useNavigate();
  const { getWeather } = useWeather();

  useEffect(() => {
    setWeather(() => getWeather());
  }, [getWeather]);

  const addHashtagItem = () => setHashtagList(prev => [...prev, newHashtag]);

  const removeHashtag = name => () =>
    setHashtagList(hashtagList.filter(hash => hash !== name));

  const goToPrevPage = () => {
    navigate('/');
  };

  const postNewDiary = () => {
    // 등록 버튼 제작 필요
  };

  return (
    <S.Container>
      <Title
        title={title}
        setTitle={onChangeTitle}
        date={date}
        weather={weather}
        mood={mood}
        setMood={onChangeMood}
      />
      <EditorBox />
      <HashtagBox
        newHashtag={newHashtag}
        addHashtagItem={addHashtagItem}
        removeHashtag={removeHashtag}
        onChangeNewHashtag={onChangeNewHashtag}
        resetNewHashtag={resetNewHashtag}
        hashtagList={hashtagList}
      />
      <S.BtnBox>
        <button onClick={postNewDiary}>작성</button>
        <button onClick={goToPrevPage}>취소</button>
      </S.BtnBox>
    </S.Container>
  );
};

export default Edit;
