import { useState, useEffect } from "react";
import { getAllMovies } from "../../../service/service";
import Movies from "../movies/Movies";
import Pagination from "../../features/pagination/PaginationComponent";
import { Spin } from "antd";
import "./home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);
  const [input, setInput] = useState("");
  const [movie, setMovie] = useState(movies);

  useEffect(() => {
    getAllMovies().then((response) => setMovies(response.data?.items));
  }, []);
  const indexOfLastPost = currentPage * moviesPerPage; //10
  const indexOfFirstPost = indexOfLastPost - moviesPerPage; //0

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onChangeInput = (e) => {
    setInput(e.target.value);
    const searchResult = movies.filter((movie) => {
      let currentValue = e.target.value;
      let regExp = new RegExp(`^${currentValue.toUpperCase()}`);
      return movie.title.toUpperCase().match(regExp);
    });
    setMovie(searchResult);
  };

  let currentMovies;
  if (input.length > 0) {
    currentMovies = movie;
  } else {
    currentMovies = movies.slice(indexOfFirstPost, indexOfLastPost);
  }
  return (
    <div>
      <div>
        <img
          src="logoImg.jpeg"
          alt="logo image"
          style={{ width: 150, height: 100 }}
        />
      </div>
      <input
        className="inputSearch"
        type="text"
        placeholder="Search your movie"
        onChange={onChangeInput}
      />
      <h1>Top Popular</h1>
      {
        Object.keys(movies).length === 0 ? (
          <Spin size="large" />

      ):(
      <> 
      <Movies movies={currentMovies} />
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
      </>
      )}
    </div>
    
  );
};
export default Home;
