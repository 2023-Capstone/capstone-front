import List from './List';
import Pagination from './Pagination';
import * as S from './index.style';

const Post = ({ list, isThumbnail, totalPage, mood, page, setParams }) => {
  return (
    <S.Container>
      <List list={list} isThumbnail={isThumbnail} />
      {totalPage && (
        <Pagination
          totalPage={totalPage}
          mood={mood}
          page={page}
          setParams={setParams}
        />
      )}
    </S.Container>
  );
};

export default Post;
