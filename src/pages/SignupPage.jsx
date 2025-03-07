import { useState } from "react";
import Input from "../components/Input";
import styles from "../styles/login.module.scss";
import { useSupabaseAuth } from "../supabase";
import ContentsContainer from "../components/common/ContentsContainer";

function SignupPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { signUp, loginWithGoogle, loginWithKakao } = useSupabaseAuth();

  function handleSocialLogin(type, redirectUrl) {
    if (type == "kakao") {
      loginWithKakao(redirectUrl);
    } else if (type == "google") {
      loginWithGoogle(redirectUrl);
    }
  }
  async function handleClickSignupButton() {
    console.log(userEmail, userPassword);
    signUp({ email: userEmail, password: userPassword });
  }
  return (
    <ContentsContainer scrollType="fixed">
      <div className={styles.inputContainer}>
        <div className={styles.title}>회원가입</div>
        <Input
          type="email"
          id="userEmail"
          label="이메일"
          value={userEmail}
          onChange={setUserEmail}
          placeholder="이메일을 입력하세요"
          errorMessage="이메일 형식으로 작성해주세요."
        />
        <Input
          type="text"
          id="userName"
          label="이름"
          value={userName}
          onChange={setUserName}
          placeholder="이름을 입력하세요"
          errorMessage="이름을 입력해주세요"
        />
        <Input
          type="password"
          id="userPassword"
          label="비밀번호"
          value={userPassword}
          onChange={setUserPassword}
          placeholder="비밀번호를 입력하세요"
          errorMessage="비밀번호를 입력해주세요"
        />
        <div className={styles.button} onClick={handleClickSignupButton}>
          회원가입
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

export default SignupPage;
