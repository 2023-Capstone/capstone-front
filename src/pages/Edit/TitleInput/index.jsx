import * as S from './index.styles';

const TitleInput = () => {
  return (
    <S.Container>
      <S.Input />
      <S.DateBox>
        <p>date: 오늘</p>
        <p>weather: 흐림</p>
        <p>
          <label htmlFor="mood">mood: </label>
          <select name="mood" id="mood">
            <option value="best">😀</option>
            <option value="good">🙂</option>
            <option value="medium">😐</option>
            <option value="bad">🙁</option>
            <option value="worst">😞</option>
          </select>
        </p>
      </S.DateBox>
    </S.Container>
  );
};

export default TitleInput;
