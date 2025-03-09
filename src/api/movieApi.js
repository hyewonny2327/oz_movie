export async function getMovieDetail(id) {
  const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=ko`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
  });
  const movieDetail = await data.json();
  return movieDetail;
}

export async function getMovieData(searchQuery, page) {
  console.log('searchQuery', searchQuery);
  const endpoint =
    searchQuery !== null
      ? `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=ko-KR&page=${page}`
      : `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=${page}`;
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
  });
  const movieData = await response.json();
  return movieData;
}
