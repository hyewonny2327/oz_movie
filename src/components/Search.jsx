import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "../styles/search.module.scss";
function Search() {
  const [searchInput, setSearchInput] = useState();
  const debounce = useDebounce({ value: searchInput, delay: 2000 });
  // eslint-disable-next-line no-unused-vars
  const [searcParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (debounce?.trim() === "") {
      setSearchParams([]);
      navigate("/");
    }
    if (debounce) {
      //api 호출
      setSearchParams({ query: debounce });
      navigate(`/?query=${debounce}`);
      console.log("api 호출");
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
