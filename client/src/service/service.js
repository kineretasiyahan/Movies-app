const API =
  process.env.NODE_ENV === "production"
    ? "https://movies-react-app-one.herokuapp.com/"
    : "http://localhost:5000";
export const getAllMovies = async () => {
    return await fetch(`${API}/MostPopularMovies`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };
export const getMovieById = async (movieId) => {
    return await fetch(`${API}/ByIdMovies/${movieId.id}`)
      .then((response) => response.json())
      .then((response) => response.data)
      .catch((error) => console.log(error));
  };