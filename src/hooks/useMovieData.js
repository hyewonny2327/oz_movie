import { useEffect, useState } from 'react';
import { getMovieData } from '../api/movieApi';

const useMovieData = (searchQuery) => {
  const [movieList, setMovieList] = useState();

  useEffect(() => {
    async function getMovieList() {
      const response = await getMovieData(searchQuery);
      setMovieList(response.results);
    }
    getMovieList();
  }, [searchQuery]);

  return movieList;
};

export default useMovieData;
