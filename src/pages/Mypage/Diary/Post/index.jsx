import List from './List';
import Pagination from './Pagination';
import * as S from './index.style';

const Post = ({
  list,
  totalPage,
  diaryCount,
  currentPage,
  changeCurrentPage,
  isThumbnail,
}) => {
  return (
    <S.Container>
      <List list={list} isThumbnail={isThumbnail} />
      {totalPage && (
        <Pagination
          totalPage={totalPage}
          diaryCount={diaryCount}
          changeCurrentPage={changeCurrentPage}
          currentPage={currentPage}
        />
      )}
    </S.Container>
  );
};

export default Post;
