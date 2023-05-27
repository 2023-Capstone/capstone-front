import * as S from './index.style';

const Item = ({ item, isThumbnail }) => {
  return (
    <>
      {!isThumbnail && (
        <S.ContainerList>
          <S.Title>{item.title}</S.Title>
          <S.Date>{item.createAt}</S.Date>
        </S.ContainerList>
      )}
      {isThumbnail && (
        <S.ContainerGrid>
          <S.WrapperImg className={isThumbnail ? 'show' : ''}>
            <img src="@" alt="썸네일" />
          </S.WrapperImg>
          <S.Title>{item.title}</S.Title>
          <S.Date>{item.createAt}</S.Date>
        </S.ContainerGrid>
      )}
    </>
  );
};

export default Item;
