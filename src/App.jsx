import { useSearchParams } from 'react-router-dom';
import './App.css';
import MovieCard from './components/MovieCard';
import styles from './styles/mainPage.module.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { useSupabaseAuth } from './supabase';
// import useMovieData from './hooks/useMovieData';
import { UserContext } from './providers/userProvider';
import useInfiniteScroll from './hooks/useInfinityScroll';
import { getMovieData } from './api/movieApi';
// import useUser from './hooks/useUser';

function App() {
  const [searchParams] = useSearchParams();
  const searchInput = searchParams.get('query');
  const { getUserInfo } = useSupabaseAuth();
  const { userInfo, setUserInfo } = useContext(UserContext);
  // const movieList = useMovieData(searchInput);
  const [movieList, setMovieList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const targetRef = useRef(null);

  useEffect(() => {
    async function getUserData() {
      await getUserInfo();
      const userData = JSON.parse(localStorage.getItem('userInfo'));
      if (userData) setUserInfo(userData);
    }
    getUserData();
    setTargetRef(targetRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovieList = async () => {
    if (hasMore) {
      const response = await getMovieData(searchInput, page);
      setMovieList((prev) => [...prev, ...response.results]);
      setPage((prev) => prev + 1);
      setHasMore(response.results.length > 0);
    } else return;
  };
  useEffect(() => {
    if (searchInput !== null) {
      console.log('search', searchInput);
      setMovieList([]);
      setPage(1);
      setHasMore(true);
      getMovieList();
    }

    if (!searchInput) {
      console.log('Loading default movies...');
      setMovieList([]);
      setPage(1);
      setHasMore(true);
      getMovieList();
    }
  }, [searchInput]);
  const { setTargetRef } = useInfiniteScroll(getMovieList);

  return (
    <>
      <div className={styles.contentsContainer}>
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
        {hasMore && (
          <div
            ref={targetRef}
            onIntersect={getMovieList}
            style={{ width: '20px', height: '20px', backgroundColor: 'red' }}
          ></div>
        )}
      </div>
    </>
  );
}

export default App;
