import { useEffect, useState } from "react";
import Input from "../components/Input";
import { useEmailAuth } from "../supabase/auth/useEmail.auth";
import { useAuth } from "../supabase/auth/useAuth";
import { useOAuth } from "../supabase/auth/useOauth.auth";
import styles from "../styles/login.module.scss";
function LoginPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPw, setUserPw] = useState("");
  const { login } = useEmailAuth();
  const { logout } = useAuth();
  const { loginWithKakao, loginWithGoogle } = useOAuth();

  function handleLoginButtonClick() {
    login({ email: userEmail, password: userPw });
  }
  function handleLogOutButtonClick() {
    logout();
  }
  function kakaoLogin() {
    console.log("카카오로그인");
    loginWithKakao("/");
  }
  function googleLogin() {
    console.log("구글로그인");
    loginWithGoogle("/");
  }
  useEffect(() => {}, []);

  return (
    <div className="">
      <div className={styles.loginContainer}>
        <div>로그인</div>
        <Input
          type="email"
          id="userId"
          label="아이디"
          value={userEmail}
          onChange={setUserEmail}
          placeholder="id를 입력하세요"
          errorMessage="아이디를 다시 입력하세요"
        />
        <Input
          type="password"
          id="userPw"
          label="비밀번호"
          value={userPw}
          onChange={setUserPw}
          placeholder="비밀번호를 입력하세요"
          errorMessage="비밀번호를 다시 입력하세요"
        />
        <div onClick={() => handleLoginButtonClick()}>로그인버튼</div>
        <div onClick={() => handleLogOutButtonClick()}>로그아웃버튼</div>
        <div onClick={() => kakaoLogin()}>카카오로그인</div>
        <div onClick={() => googleLogin()}>구글로그인</div>
      </div>
    </div>
  );
}

export default LoginPage;
