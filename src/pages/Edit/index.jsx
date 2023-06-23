import { useState } from 'react';

import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';

import EditorBox from './EditorBox';
import HashtagBox from './HashtagBox';
import * as S from './index.styles';
import Title from './Title';

import { requestUploadDiary } from '@/apis/request/diary';
import { CLIENT_MESSAGE } from '@/constants/message';
import useError from '@/hooks/useError';
import useInput from '@/hooks/useInput';
import useSnackbar from '@/hooks/useSnackbar';
import { blocksAtom } from '@/store/blocks';

const Edit = () => {
  const date = new Date();
  const [hashtagList, setHashtagList] = useState([]);
  const [weather, setWeather] = useState(null);
  const { value: mood, onChangeValue: onChangeMood } = useInput('');
  const { value: title, onChangeValue: onChangeTitle } = useInput('');
  const [font, setFont] = useState('basic');
  const blocks = useAtomValue(blocksAtom);
  const handleError = useError();

  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();

  const addHashtag = newHashtag => {
    setHashtagList(prev => [...prev, newHashtag]);
  };

  const removeHashtag = name => () => {
    if (!hashtagList.findIndex(hashtag => hashtag === name) === -1) {
      showSnackbar(CLIENT_MESSAGE.ERROR.NOT_INCLUDE_HASHTAG);
      return;
    }
    setHashtagList(hashtagList.filter(hash => hash !== name));
  };

  const changeFont = ({ target: { value: font } }) => {
    setFont(font);
  };

  const goToPrevPage = () => {
    navigate(-1);
  };

  const makeNewDiary = async e => {
    // TODO: 일기 작성 API 요청 및 처리
    e.preventDefault();
    if (window.confirm('일기를 등록 하시겠습니까?')) {
      const diary = {
        title: title,
        weather: weather,
        hashtag: hashtagList,
        mood: mood,
        font: font,
        blocks: [...blocks],
      };
      try {
        const request = await requestUploadDiary(diary);
        console.log(request);
        showSnackbar('일기 작성이 완료되었습니다. ');
      } catch (err) {
        handleError(err.code);
      }
    }
  };

  return (
    <S.Container>
      <Title
        title={title}
        setTitle={onChangeTitle}
        date={date}
        setWeather={setWeather}
        mood={mood}
        setMood={onChangeMood}
      />
      <EditorBox font={font} changeFont={changeFont} />
      <HashtagBox
        addHashtag={addHashtag}
        removeHashtag={removeHashtag}
        hashtagList={hashtagList}
      />
      <S.BtnBox>
        <button onClick={makeNewDiary}>작성</button>
        <button type="button" onClick={goToPrevPage}>
          취소
        </button>
      </S.BtnBox>
    </S.Container>
  );
};

export default Edit;
