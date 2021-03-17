import { ChangeEventHandler } from "react";
import SearchIcon from "../icons/SearchIcon";
import styles from "./SearchInput.module.css";

export type SearchInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
      <span className={styles.loupe}>
        <SearchIcon />
      </span>
    </div>
  );
}

export default SearchInput;
