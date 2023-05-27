import List from './List';
import Pagination from './Pagination';

const Post = ({
  list,
  totalPage,
  currentPage,
  changeCurrentPage,
  isThumbnail,
}) => {
  return (
    <>
      <h1>현재 페이지:{currentPage + 1}</h1>
      <List list={list} isThumbnail={isThumbnail} />
      {totalPage && (
        <Pagination
          totalPage={totalPage}
          changeCurrentPage={changeCurrentPage}
        />
      )}
    </>
  );
};

export default Post;
