import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./components/MovieDetail";
import movieListData from "./data/movieListData.json";
import { useEffect, useState } from "react";

function App() {
  const [movieList, setMovieList] = useState();

  useEffect(() => {
    // movieListData.json 데이터를 import하여 상태로 관리합니다.
    setMovieList(movieListData.results);
  }, []);
  return (
    <>
      <MovieDetail />
      {/* App.jsx 파일에서 MovieCard 컴포넌트를 사용하여 영화 목록을 렌더링합니다. */}
      {movieList?.map((movie) => (
        <MovieCard
          key={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          vote_average={movie.vote_average}
        />
      ))}
    </>
  );
}

export default App;
