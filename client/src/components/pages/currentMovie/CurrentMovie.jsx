import { useState, useEffect } from "react";
import { getMovieById } from "../../../service/service";
import { Modal} from 'antd';
import './currentMovie.css'
import 'antd/dist/antd.css';

const CurrentMovie = ({  selectedMovie,onClickHandle }) => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    getMovieById(selectedMovie).then((res) => {
      setMovie(res);
    });
  }, []);
  return (
    <div >
      <Modal visible={true}>
      <h1>{movie?.Title}</h1>
      <img src={movie?.Poster} style={{height:250}}></img>
      <h2 >{movie?.Year}</h2>
      <h2 >{movie?.Genre}</h2>
      <h3 >{movie?.Plot}</h3>
      <h3 >{movie?.Actors}</h3>
      <button className={"btnModal"}onClick={onClickHandle}>Back</button>
      </Modal>
    </div>
  );
};

export default CurrentMovie;
