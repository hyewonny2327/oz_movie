import { useNavigate } from 'react-router-dom';
import styles from '../styles/movieCard.module.scss';
//MovieCard 컴포넌트를 생성합니다.
function MovieCard({ poster_path, title, vote_average, id }) {
  const navigate = useNavigate();
  return (
    // 필요한 데이터를 App.jsx에서 전달받아 렌더링합니다.
    <div className={styles.card__container} key={id} onClick={() => navigate(`/details/${id}`)}>
      <img className={styles.card__poster} src={`https://image.tmdb.org/t/p/w500${poster_path}`}></img>
      <div className={styles.card__title}>{title}</div>
      <div className={styles.card__vote}>평점: {vote_average}</div>
    </div>
  );
}

export default MovieCard;
