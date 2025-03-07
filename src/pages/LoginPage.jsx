import { useEffect, useState } from "react";
import Input from "../components/Input";
import styles from "../styles/login.module.scss";
import { useSupabaseAuth } from "../supabase";
import ContentsContainer from "../components/common/ContentsContainer";
function LoginPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPw, setUserPw] = useState("");
  const { login, loginWithGoogle, loginWithKakao } = useSupabaseAuth();

  function handleLoginButtonClick() {
    login({ email: userEmail, password: userPw });
  }

  function handleSocialLogin(type, redirectUrl) {
    if (type == "kakao") {
      loginWithKakao(redirectUrl);
    } else if (type == "google") {
      loginWithGoogle(redirectUrl);
    }
  }
  useEffect(() => {}, []);

  return (
    <ContentsContainer scrollType="fixed">
      <div className={styles.inputContainer}>
        <div className={styles.title}>로그인</div>
        <Input
          type="email"
          id="userId"
          value={userEmail}
          onChange={setUserEmail}
          placeholder="id를 입력하세요"
          errorMessage="아이디를 다시 입력하세요"
        />
        <Input
          type="password"
          id="userPw"
          value={userPw}
          onChange={setUserPw}
          placeholder="비밀번호를 입력하세요"
          errorMessage="비밀번호를 다시 입력하세요"
        />
        <div className={styles.button} onClick={() => handleLoginButtonClick()}>
          로그인
        </div>
        <div className={styles.socialLoginContainer}>
          <div>오즈 무비가 처음이신가요?</div>
          <div onClick={() => handleSocialLogin("kakao", "/")}>
            카카오로그인
          </div>
          <div onClick={() => handleSocialLogin("kakao", "/")}>구글로그인</div>
        </div>
      </div>
    </ContentsContainer>
  );
}

export default LoginPage;
