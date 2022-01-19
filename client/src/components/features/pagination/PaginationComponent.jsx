import "./Pagination.css";
  const PaginationComponent = ({ moviesPerPage, totalMovies, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div >
      {pageNumbers.map((number) => {
        return (
          <a key={number} onClick={() => paginate(number)}>
            {number}
          </a>
        );
      })}
    </div>
  );
};
export default PaginationComponent;
