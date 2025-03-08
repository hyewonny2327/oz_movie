import { createContext, useState } from 'react';

// 1. Context 생성
export const UserContext = createContext(null);

// 2. Provider 컴포넌트
export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  return <UserContext.Provider value={{ userInfo, setUserInfo }}>{children}</UserContext.Provider>;
};
