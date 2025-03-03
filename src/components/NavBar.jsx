import styles from '../styles/navBar.module.scss';
import Search from './Search';
function NavBar() {
  return (
    <div className={styles.container}>
      <div>oz 무비</div>
      <div className={styles.searchBar}>
        <Search />
      </div>
      <div>로그인</div>
      <div>회원가입</div>
    </div>
  );
}

export default NavBar;
