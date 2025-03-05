import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUserInfo";
import styles from "../styles/navBar.module.scss";
import Search from "./Search";
function NavBar() {
  const { userInfo } = useUser();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>oz 무비</div>
      <div className={styles.searchBar}>
        <Search />
      </div>
      {userInfo ? (
        <div>
          <div>프로필</div>
          <div onClick={() => navigate("/mypage")}>마이페이지</div>
        </div>
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
