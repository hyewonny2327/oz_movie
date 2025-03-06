import { useAuth } from "./useAuth";
import { useEmailAuth } from "./useEmail.auth";
import { useOAuth } from "./useOauth.auth";

export const useSupabaseAuth = () => {
  const { getUserInfo, logout } = useAuth();
  const { login, signUp } = useEmailAuth();
  const { loginWithGoogle, loginWithKakao } = useOAuth();

  console.log("useSupabaseAuth 실행됨");

  return {
    login,
    signUp,
    getUserInfo,
    logout,
    loginWithKakao,
    loginWithGoogle,
  };
};
