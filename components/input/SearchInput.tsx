import SearchIcon from "../icons/SearchIcon";
import styles from "./SearchInput.module.css";

function SearchInput() {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder="Search" />
      <button className={styles.loupe}>
        <SearchIcon />
      </button>
    </div>
  );
}

export default SearchInput;
