import ArrowRightIcon from "../icons/ArrowRightIcon";
import styles from "./Button.module.css";
import Link from "next/link";

export type ButtonProps = {
  label: string;
  link: string;
};

function Button({ label, link }: ButtonProps) {
  return (
    <Link href={link}>
      <div className={styles.btn}>
        {label}
        <span className={styles.icon}>
          <ArrowRightIcon />
        </span>
      </div>
    </Link>
  );
}

export default Button;
