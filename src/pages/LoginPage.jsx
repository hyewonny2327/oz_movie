import { useState } from 'react';
import Input from '../components/Input';
import styles from '../styles/login.module.scss';
import { useSupabaseAuth } from '../supabase';
import SocialLogin from '../components/SocialLogin';
function LoginPage() {
  const [userEmail, setUserEmail] = useState('');
  const [userPw, setUserPw] = useState('');
  const { login } = useSupabaseAuth();

  function handleLoginButtonClick() {
    login({ email: userEmail, password: userPw });
  }

  return (
    <div className={styles.contentContainer}>
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
        <SocialLogin />
      </div>
    </div>
  );
}

export default LoginPage;
