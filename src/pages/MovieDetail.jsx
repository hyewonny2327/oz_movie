import { useEffect, useState } from "react";
import styles from "../styles/movieDetail.module.scss";
import { useParams } from "react-router-dom";
function MovieDetail() {
  const { id } = useParams();
  const [movieDetailData, setMovieDetailData] = useState();
  useEffect(() => {
    async function fetchMovieDetail() {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=ko`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          },
        }
      );
      const movieDetail = await data.json();
      setMovieDetailData(movieDetail);
    }
    fetchMovieDetail();
  }, [id]);
  useEffect(() => {
    console.log(movieDetailData);
  }, [movieDetailData]);
  return (
    <div className={styles.contentContainer}>
      <div className={styles.detail__container}>
        <img
          className={styles.detail__image}
          src={`https://image.tmdb.org/t/p/w500${movieDetailData?.backdrop_path}`}
        ></img>
        <div className={styles.detail__textContainer}>
          <div className={styles.detail__titleContainer}>
            <div className={styles.detail__title}>{movieDetailData?.title}</div>
            <div className={styles.detail__vote}>
              {movieDetailData?.vote_average}
            </div>
          </div>
          <div className={styles.detail__genre}>
            {movieDetailData?.genres.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
          <div className={styles.detail__overview}>
            {movieDetailData?.overview}
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieDetail;
