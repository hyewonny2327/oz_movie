import { useNavigate } from 'react-router-dom';
import styles from '../styles/navBar.module.scss';
import Search from './Search';
import { useSupabaseAuth } from '../supabase';
import { useContext, useState } from 'react';
import { UserContext } from '../providers/userProvider';
// import useUser from '../hooks/useUser';
function NavBar() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const { logout } = useSupabaseAuth();
  const [isProfileClick, setIsProfileClick] = useState();
  function handleLogOutButtonClick() {
    logout();
    setUserInfo(null);
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo} onClick={() => navigate('/')}>
        oz 무비
      </div>
      <div className={styles.searchBar}>
        <Search />
      </div>
      {userInfo ? (
        <>
          <div className={styles.menu}>
            <div className={styles.profile} onClick={() => setIsProfileClick(!isProfileClick)}>
              <img className={styles.profileImage} src={userInfo.user.profileImageUrl}></img>
              {isProfileClick && (
                <div className={styles.modal}>
                  <div onClick={handleLogOutButtonClick}>로그아웃</div>
                  <div onClick={() => navigate('/mypage')}>마이페이지</div>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.login} onClick={() => navigate('/login')}>
            로그인
          </div>
          <div className={styles.join} onClick={() => navigate('/signup')}>
            회원가입
          </div>
        </>
      )}
    </div>
  );
}

export default NavBar;
