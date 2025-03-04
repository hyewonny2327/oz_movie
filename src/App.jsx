import "./App.css";
import MovieCard from "./components/MovieCard";
import styles from "./styles/mainPage.module.scss";
import { useEffect, useState } from "react";
import { useAuth } from "./supabase/auth/useAuth";

function App() {
  const [movieList, setMovieList] = useState();
  //전역으로 바꿔줘야함
  // const [userInfo, setUserInfo] = useState();
  const { getUserInfo } = useAuth();
  useEffect(() => {
    async function fetchMovieData() {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          },
        }
      );
      const movieData = await response.json();
      console.log(movieData);
      setMovieList(movieData.results);
    }

    async function saveUserInfo() {
      const user = await getUserInfo();
      // setUserInfo(user.user);
      console.log(user.user);
    }
    // movieListData.json 데이터를 import하여 상태로 관리합니다.
    fetchMovieData();
    // getUserInfo();
    saveUserInfo();
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
