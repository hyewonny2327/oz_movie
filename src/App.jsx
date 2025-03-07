import { useSearchParams } from "react-router-dom";
import "./App.css";
import MovieCard from "./components/MovieCard";
import styles from "./styles/mainPage.module.scss";
import { useEffect } from "react";
import { useSupabaseAuth } from "./supabase";
import useMovieData from "./hooks/useMovieData";
import useUser from "./hooks/useUser";
import ContentsContainer from "./components/common/ContentsContainer";

function App() {
  // const [movieList, setMovieList] = useState();
  const [searchParams] = useSearchParams();
  const searchInput = searchParams.get("query") | "";
  const { getUserInfo } = useSupabaseAuth();
  const { updateUser } = useUser();
  const movieList = useMovieData(searchInput);

  useEffect(() => {
    async function getUserData() {
      await getUserInfo();
      // //로컬 스토리지에서 가져옴
      const userData = JSON.parse(localStorage.getItem("userInfo"));
      // //유저 데이터를 context api로 업데이트
      if (userData) updateUser(userData);
    }
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ContentsContainer>
        <div className={styles.list__container}>
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
      </ContentsContainer>
    </>
  );
}

export default App;
