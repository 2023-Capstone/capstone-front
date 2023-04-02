import * as S from './index.styles';

const HashtagBox = () => {
  return (
    <>
      <S.Container>
        <S.InputBox>
          <label htmlFor="hashtag">#</label>
          <input type="text" id="hashtag" placeholder="해시태그 박스" />
        </S.InputBox>
        <p>#호롤롤</p>
        <p>#호롤롤</p>
        <p>#호롤롤</p>
      </S.Container>
    </>
  );
};

export default HashtagBox;
