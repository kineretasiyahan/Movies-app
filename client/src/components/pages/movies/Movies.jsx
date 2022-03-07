import { useState } from "react";
import CurrentMovie from "../currentMovie/CurrentMovie";
import { Card } from "antd";
import "./movies.css";

const Movies = ({ movies }) => {
  const [curenntMovie, setCurenntMovie] = useState({});// // אובייקט התחלתי 
  const [isDesplay, setIsDesplay] = useState(false);// ערך של TRUE/FALSE על מנת לבצע תנאי לתצוגה
  const { Meta } = Card;
  const onClickHandler = () => {
    !isDesplay ? setIsDesplay(true) : setIsDesplay(false);
  };
  const clickToCurrentMovie = (currentMovie) => {
    setCurenntMovie(currentMovie);
    !isDesplay ? setIsDesplay(true) : setIsDesplay(false);
  };
  return (
    <div>
      {isDesplay ? (
        <CurrentMovie
          onClickHandle={onClickHandler}
          selectedMovie={curenntMovie}
        />
      ) : 
        <div className="mainDiv">
          {movies?.map((item) => {
            return (
              <Card
                className="card"
                onClick={() => clickToCurrentMovie(item)}
                key={item.id}
                hoverable
                cover={<img className="imgMovie"alt="movie image" src={item.image}  />}
                title={item.title}
              >
                <Meta
                  title={item.imDbRating}
                  description={item.crew}
                  style={{ color: "white" }}
                />
              </Card>
            );
          })}
        </div>
       }
    </div>
  );
};
export default Movies;

