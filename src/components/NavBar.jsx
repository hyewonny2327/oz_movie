import useUser from "../hooks/useUserInfo";
import styles from "../styles/navBar.module.scss";
import Search from "./Search";
function NavBar() {
  const { userInfo } = useUser();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>oz 무비</div>
      <div className={styles.searchBar}>
        <Search />
      </div>
      {userInfo ? (
        <div>프로필</div>
      ) : (
        <>
          <div className={styles.login}>로그인</div>
          <div className={styles.join}>회원가입</div>
        </>
      )}
    </div>
  );
}

export default NavBar;
