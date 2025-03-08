import { useSearchParams } from 'react-router-dom';
import './App.css';
import MovieCard from './components/MovieCard';
import styles from './styles/mainPage.module.scss';
import { useContext, useEffect } from 'react';
import { useSupabaseAuth } from './supabase';
import useMovieData from './hooks/useMovieData';
import { UserContext } from './providers/userProvider';
// import useUser from './hooks/useUser';

function App() {
  const [searchParams] = useSearchParams();
  const searchInput = searchParams.get('query') | '';
  const { getUserInfo } = useSupabaseAuth();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const movieList = useMovieData(searchInput);

  useEffect(() => {
    async function getUserData() {
      await getUserInfo();
      const userData = JSON.parse(localStorage.getItem('userInfo'));
      if (userData) setUserInfo(userData);
    }
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);
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
      </div>
    </>
  );
}

export default App;
