import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUserInfo";
import styles from "../styles/navBar.module.scss";
import Search from "./Search";
import { useSupabaseAuth } from "../supabase";
import { useEffect, useState } from "react";
function NavBar() {
  const { userInfo } = useUser();
  const navigate = useNavigate();
  const { logout } = useSupabaseAuth();
  const [isProfileClick, setIsProfileClick] = useState();
  function handleLogOutButtonClick() {
    console.log("로그아웃");
    logout();
  }

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <div className={styles.container}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        oz 무비
      </div>
      <div className={styles.searchBar}>
        <Search />
      </div>
      {userInfo ? (
        <>
          <div className={styles.menu}>
            <div
              className={styles.profile}
              onClick={() => setIsProfileClick(!isProfileClick)}
            >
              <img
                className={styles.profileImage}
                src={userInfo.user.profileImageUrl}
              ></img>
              {isProfileClick && (
                <div className={styles.modal}>
                  <a onClick={handleLogOutButtonClick} href="/">
                    로그아웃
                  </a>
                  <a onClick={handleLogOutButtonClick} href="/mypage">
                    마이페이지
                  </a>
                </div>
              )}
            </div>
            {/* <div onClick={() => navigate("/mypage")}>마이페이지</div> */}
          </div>
        </>
      ) : (
        <>
          <div className={styles.login} onClick={() => navigate("/login")}>
            로그인
          </div>
          <div className={styles.join} onClick={() => navigate("/signup")}>
            회원가입
          </div>
        </>
      )}
    </div>
  );
}

export default NavBar;
