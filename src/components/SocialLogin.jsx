import styles from '../styles/login.module.scss';
import { useSupabaseAuth } from '../supabase';

function SocialLogin() {
  const { loginWithGoogle, loginWithKakao } = useSupabaseAuth();

  function handleSocialLogin(type, redirectUrl) {
    if (type == 'kakao') {
      loginWithKakao(redirectUrl);
    } else if (type == 'google') {
      loginWithGoogle(redirectUrl);
    }
  }
  return (
    <div className={styles.socialLoginContainer}>
      <div>오즈 무비가 처음이신가요?</div>
      <div onClick={() => handleSocialLogin('kakao', '/')}>카카오로그인</div>
      <div onClick={() => handleSocialLogin('kakao', '/')}>구글로그인</div>
    </div>
  );
}

export default SocialLogin;
