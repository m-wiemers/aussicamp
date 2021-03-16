import LoupeIcon from "../icons/LoupeIcon";
import styles from "./SearchInput.module.css";

function SearchInput() {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder="Search" />
      <button className={styles.loupe}>
        <LoupeIcon />
      </button>
    </div>
  );
}

export default SearchInput;
