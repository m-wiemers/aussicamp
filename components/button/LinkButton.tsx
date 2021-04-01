import ArrowRightIcon from "../icons/ArrowRightIcon";
import styles from "./LinkButton.module.css";
import Link from "next/link";

export type LinkButtonProps = {
  label: string;
  link: string;
};

function LinkButton({ label, link }: LinkButtonProps) {
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

export default LinkButton;
