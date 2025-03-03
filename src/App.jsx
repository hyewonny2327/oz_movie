import { useSearchParams } from 'react-router-dom';
import './App.css';
import MovieCard from './components/MovieCard';
import styles from './styles/mainPage.module.scss';
import { useEffect, useState } from 'react';

function App() {
  const [movieList, setMovieList] = useState();
  const [searchParams] = useSearchParams();
  const searchInput = searchParams.get('query');

  useEffect(() => {}, [searchInput]);

  useEffect(() => {
    async function fetchSearchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=ko&page=1`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          },
        }
      );
      const searchResult = await response.json();
      setMovieList(searchResult.results);
    }

    async function fetchMovieData() {
      const response = await fetch(
        'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko&page=1&sort_by=popularity.desc',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          },
        }
      );
      const movieData = await response.json();
      // console.log(import.meta.env.VITE_API_TOKEN); // 정상 출력됨
      setMovieList(movieData.results);
    }
    // movieListData.json 데이터를 import하여 상태로 관리합니다.

    if (!searchInput) {
      fetchMovieData();
    } else {
      fetchSearchMovie();
    }
    fetchMovieData();
  }, [searchInput]);
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
