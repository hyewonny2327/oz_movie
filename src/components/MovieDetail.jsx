import { useEffect, useState } from "react";
import movieDetail from "../data/movieDetailData.json";

function MovieDetail() {
  const [movieDetailData, setMovieDetailData] = useState();
  useEffect(() => {
    setMovieDetailData(movieDetail);
  }, []);
  useEffect(() => {
    console.log(movieDetailData);
  }, [movieDetailData]);
  return (
    <div className="detail__container flex__row">
      <img
        className="detail__image"
        src={`https://image.tmdb.org/t/p/w500${movieDetailData?.backdrop_path}`}
      ></img>
      <div className="detail__textContainer">
        <div className="flex__row">
          <div className="detail__title">{movieDetailData?.title}</div>
          <div className="detail__vote">{movieDetailData?.vote_average}</div>
        </div>
        <div className="detail__genre">
          {movieDetailData?.genres.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
        <div className="detail__overview">{movieDetailData?.overview}</div>
      </div>
    </div>
  );
}
export default MovieDetail;
