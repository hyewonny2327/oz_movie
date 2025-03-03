import { useEffect, useState } from 'react';

function useDebounce({ value, delay }) {
  const [debounce, setDebounce] = useState(value);
  //!업데이트 된 value값이이 들어오면, useEffect 호출
  useEffect(() => {
    //! 설정한 시간(delay) 후 debounce에 value값을 넣어줌.
    const handler = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  //! 설정한 시간(delay) 후 업데이트된 'debounce'값을 return한다.
  //! 훅을 사용할때 delay초 후 업데이트 된 debounce값을 받아서 api를 호출한다.
  return debounce;
}

export default useDebounce;
