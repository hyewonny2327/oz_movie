import { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from '../styles/search.module.scss';
function Search() {
  const [searchInput, setSearchInput] = useState();
  const debounce = useDebounce({ value: searchInput, delay: 2000 });
  // eslint-disable-next-line no-unused-vars
  const [searcParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    //검색어를 입력하지 않았을 경우
    if (debounce?.trim() === '') {
      setSearchParams([]);
      navigate('/');
    }
    //검색어를 입력했을 경우
    if (debounce) {
      //api 호출
      setSearchParams({ query: debounce });
      navigate(`/?query=${debounce}`);
    }
  }, [debounce, setSearchParams, navigate]);

  return (
    <input
      className={styles.searchInput}
      type="text"
      placeholder="영화제목을 입력하세요"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
}

export default Search;
