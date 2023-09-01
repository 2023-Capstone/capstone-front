import { useEffect, useState } from 'react';

import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';

import * as S from './index.styles';

import { getdiaryListByCalendar } from '@/apis/request/diary';
import { requestUploadDiary } from '@/apis/request/diary';
import EditorBox from '@/components/EditorBox';
import EditorTitle from '@/components/EditorTitle';
import HashtagBox from '@/components/HashtagBox';
import { MOOD } from '@/constants/diary';
import { CLIENT_MESSAGE } from '@/constants/message';
import { BROWSER_PATH } from '@/constants/path';
import useError from '@/hooks/useError';
import useInput from '@/hooks/useInput';
import useSnackbar from '@/hooks/useSnackbar';
import { blocksAtom } from '@/store/blocks';
import { checkTodayDiary } from '@/utils/date';

const New = () => {
  const date = new Date();
  const [hashtagList, setHashtagList] = useState([]);
  const [weather, setWeather] = useState(null);
  const { value: mood, onChangeValue: onChangeMood } = useInput(MOOD.BEST.text);
  const { value: title, onChangeValue: onChangeTitle } = useInput('');
  const [font, setFont] = useState('basic');
  const blocks = useAtomValue(blocksAtom);
  const handleError = useError();

  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    getdiaryListByCalendar(currentYear, currentMonth).then(diaries => {
      if (checkTodayDiary(diaries)) {
        alert(CLIENT_MESSAGE.ERROR.ALREADY_ADD_DIARY);
        navigate(-1);
      }
    });
  }, []);

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

  const makeNewDiary = e => {
    e.preventDefault();
    if (
      blocks.length === 1 &&
      (blocks[0].type === 'img' || blocks[0].contentRef.current.length <= 0)
    ) {
      showSnackbar(CLIENT_MESSAGE.ERROR.EMPTY_DIARY);
      return;
    }
    if (!window.confirm(CLIENT_MESSAGE.GUIDE.CONFIRM_POST_DIARY)) return;

    const blockForSave = blocks.map(block => ({
      type: block.type,
      data:
        block.type === 'img'
          ? { ...block.data }
          : { ...block.data, text: block.contentRef.current },
    }));
    requestUploadDiary({
      title: title,
      weather: weather,
      hashtag: hashtagList,
      mood: mood,
      font: font,
      blocks: [...blockForSave],
    })
      .then(id => {
        showSnackbar(CLIENT_MESSAGE.GUIDE.SUCCESS_POST_DIARY);
        navigate(`${BROWSER_PATH.DETAIL}/${id}`);
      })
      .catch(err => {
        handleError(err.code);
      });
  };

  return (
    <S.Container onSubmit={makeNewDiary}>
      <EditorTitle
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
        <button>작성</button>
        <button type="button" onClick={goToPrevPage}>
          취소
        </button>
      </S.BtnBox>
    </S.Container>
  );
};

export default New;
