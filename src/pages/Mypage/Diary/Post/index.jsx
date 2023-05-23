import List from './List';
import Pagination from './Pagination';

const Post = ({ list, pageNumber, currentPage, changeCurrentPage }) => {
  return (
    <>
      <h1>현재 페이지:{currentPage + 1}</h1>
      <List list={list} />
      <Pagination
        pageNumber={pageNumber}
        changeCurrentPage={changeCurrentPage}
      />
    </>
  );
};

export default Post;
