import * as S from './index.styles';

import { CLIENT_MESSAGE } from '@/constants/message';
import { RULE } from '@/constants/rule';
import useSnackbar from '@/hooks/useSnackbar';
import { isBlank, checkLength } from '@/utils/hashtag';

const HashtagBox = ({
  newHashtag,
  addHashtagItem,
  removeHashtag,
  onChangeNewHashtag,
  resetNewHashtag,
  hashtagList,
}) => {
  const { showSnackbar } = useSnackbar();
  const addHashtag = ({ key }) => {
    if (key !== 'Enter') return;

    if (isBlank(newHashtag) || checkLength(newHashtag)) {
      showSnackbar(CLIENT_MESSAGE.ERROR.EMPTY_HASHTAG);

      return;
    }

    if (hashtagList.length === RULE.HASHTAGLIST.MAX) {
      showSnackbar(CLIENT_MESSAGE.ERROR.FULL_HASHTAG_LIST);
      resetNewHashtag();

      return;
    }

    if (hashtagList.includes(newHashtag)) {
      showSnackbar(CLIENT_MESSAGE.ERROR.DUPLICATED_HASHTAG);

      return;
    }

    addHashtagItem();
    resetNewHashtag();
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
            onChange={onChangeNewHashtag}
            onKeyUp={addHashtag}
          />
        </S.InputBox>
        {hashtagList.map(hashtag => (
          <S.Hashtag onClick={() => removeHashtag(hashtag)} key={hashtag}>
            #{hashtag}
          </S.Hashtag>
        ))}
      </S.Container>
    </>
  );
};

export default HashtagBox;