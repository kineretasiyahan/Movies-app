export const getAllMovies = async () => {
    return await fetch('http://localhost:5000/MostPopularMovies')
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };
export const getMovieById = async (movieId) => {
    return await fetch(`http://localhost:5000/ByIdMovies/${movieId.id}`)
      .then((response) => response.json())
      .then((response) => response.data)
      .catch((error) => console.log(error));
  };