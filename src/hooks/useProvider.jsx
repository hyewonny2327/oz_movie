import { createContext, useState } from "react";

// 1. Context 생성
export const UserContext = createContext(null);

// 2. Provider 컴포넌트
export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  const updateUser = (newUser) => {
    setUserInfo(newUser);
    localStorage.setItem("userInfo", JSON.stringify(newUser)); // ✅ LocalStorage에 저장
  };

  return (
    <UserContext.Provider value={{ userInfo, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
