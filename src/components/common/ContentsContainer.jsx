import styles from "../../styles/common.module.scss";
// scrollType = scroll | fixed
function ContentsContainer({ children, scrollType = "scroll" }) {
  return (
    <div className={`${styles.contentsContainer} ${styles[scrollType]}`}>
      {children}
    </div>
  );
}

export default ContentsContainer;
