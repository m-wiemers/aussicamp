import { ChangeEventHandler, MouseEventHandler } from "react";
import SearchIcon from "../icons/SearchIcon";
import styles from "./SearchInput.module.css";

export type SearchInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onButtonClick: MouseEventHandler<HTMLButtonElement>;
};

function SearchInput({ value, onChange, onButtonClick }: SearchInputProps) {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
      <button className={styles.loupe} onClick={onButtonClick}>
        <SearchIcon />
      </button>
    </div>
  );
}

export default SearchInput;
