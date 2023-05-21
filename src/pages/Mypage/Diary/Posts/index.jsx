import List from './List';
import Pagination from './Pagination';

const Posts = ({ list, pageNumber, currentPage, changeCurrentPage }) => {
  return (
    <>
      <List list={list} />
      <Pagination
        pageNumber={pageNumber}
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage}
      />
    </>
  );
};

export default Posts;
