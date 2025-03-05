import { useSearchParams } from "react-router-dom";
import "./App.css";
import MovieCard from "./components/MovieCard";
import styles from "./styles/mainPage.module.scss";
import { useEffect, useState } from "react";
import { useSupabaseAuth } from "./supabase";
import useUser from "./hooks/useUserInfo";

function App() {
  const [movieList, setMovieList] = useState();
  const [searchParams] = useSearchParams();
  const searchInput = searchParams.get("query");
  const { getUserInfo } = useSupabaseAuth();
  const { updateUser } = useUser();

  useEffect(() => {
    async function getUserData() {
      await getUserInfo();
      // //로컬 스토리지에서 가져옴
      const userData = JSON.parse(localStorage.getItem("userInfo") || null);
      // //유저 데이터를 context api로 업데이트
      updateUser(userData);
    }
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function fetchSearchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=ko&page=1`,
        {
          method: "GET",
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
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko&page=1&sort_by=popularity.desc",
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
