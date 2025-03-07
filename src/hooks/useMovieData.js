import { useEffect, useState } from "react";

const useMovieData = (searchQuery) => {
  const [movieList, setMovieList] = useState();

  useEffect(() => {
    async function getMovieData() {
      const endpoint = searchQuery
        ? `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=ko-KR&page=1`
        : "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      });
      const movieData = await response.json();
      setMovieList(movieData.results);
    }
    getMovieData();
  }, [searchQuery]);

  return movieList;
};

export default useMovieData;
