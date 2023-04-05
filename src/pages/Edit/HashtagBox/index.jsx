import { useState } from 'react';

import * as S from './index.styles';
import useCheckBlack from '../../../hooks/useCheckBlank';

import { CLIENT_MESSAGE } from '@/constants/message';

const HashtagBox = ({
  hashtagList,
  setHashtagList,
  newHashtag,
  setNewHashtag,
  showSnackbar,
}) => {
  const { isBlank, isNull } = useCheckBlack();
  const onChangeHashtag = e => {
    setNewHashtag(e.target.value);
  };
  const addHashtag = ({ key }) => {
    if (key === 'Enter') {
      if (isBlank(newHashtag) || isNull(newHashtag)) {
        showSnackbar(CLIENT_MESSAGE.ERROR.EMPTY_HASHTAG);
        setNewHashtag('');
        return;
      }
      if (hashtagList.length === 5) {
        showSnackbar(CLIENT_MESSAGE.ERROR.FULL_HASHTAG_LIST);
        setNewHashtag('');
        return;
      }
      if (hashtagList.includes(newHashtag)) {
        showSnackbar(CLIENT_MESSAGE.ERROR.REPUTATION_HASHTAG);
        setNewHashtag('');
        return;
      }
      setHashtagList(prev => [...prev, newHashtag]);
      setNewHashtag('');
    }
  };
  const deleteHashTag = name => {
    setHashtagList(prev => prev.filter(hash => hash !== name));
  };
  return (
    <>
      <S.Container>
        <S.InputBox>
          <label htmlFor="hashtag">
            #
            <S.GuideLine>
              해시태그는 최대 5개까지 추가할 수 있어요 <br />
              입력 후 엔터를 치면 자동으로 추가되고, <br />
              이미 추가된 해시태그를 클릭하면 삭제돼요
            </S.GuideLine>
          </label>
          <input
            type="text"
            id="hashtag"
            placeholder="해시태그 박스"
            value={newHashtag}
            onChange={onChangeHashtag}
            onKeyUp={addHashtag}
          />
        </S.InputBox>
        {hashtagList.map((hashtag, index) => (
          <S.Hashtag onClick={() => deleteHashTag(hashtag)} key={index}>
            #{hashtag}
          </S.Hashtag>
        ))}
      </S.Container>
    </>
  );
};

export default HashtagBox;
