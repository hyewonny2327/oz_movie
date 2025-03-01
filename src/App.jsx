import './App.css';
import MovieCard from './components/MovieCard';
import styles from './styles/mainPage.module.scss';
import { useEffect, useState } from 'react';

function App() {
  const [movieList, setMovieList] = useState();

  useEffect(() => {
    async function fetchMovieData() {
      const response = await fetch(
        'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          },
        }
      );
      const movieData = await response.json();
      console.log(movieData);
      // console.log(import.meta.env.VITE_API_TOKEN); // 정상 출력됨
      setMovieList(movieData.results);
    }
    // movieListData.json 데이터를 import하여 상태로 관리합니다.
    fetchMovieData();
  }, []);
  return (
    <>
      <div className={styles.list__container}>
        {/* App.jsx 파일에서 MovieCard 컴포넌트를 사용하여 영화 목록을 렌더링합니다. */}
        {movieList?.map((movie) => (
          <div className={styles.list__contents} key={movie.id}>
            <MovieCard
              poster_path={movie.poster_path}
              title={movie.title}
              vote_average={movie.vote_average}
              id={movie.id}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
