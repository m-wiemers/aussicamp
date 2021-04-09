import Link from "next/link";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import DragIcon from "../icons/DragIcon";
import EditIcon from "../icons/EditIcon";
import PenIcon from "../icons/PenIcon";
import styles from "./PlanDetails.module.css";

export type PlanDetailProps = {
  label: number;
  cityName: string;
  linkToCity: string;
  linkToDay: string;
  places: number;
  handleChange: MouseEventHandler<HTMLButtonElement>;
  inputChange: ChangeEventHandler<HTMLInputElement>;
  placeHolder: string;
};

function PlanDetails({
  label,
  linkToCity,
  linkToDay,
  places,
  cityName,
  handleChange,
  inputChange,
  placeHolder,
}: PlanDetailProps) {
  const [visible, setVisible] = useState(false);
  function handleCityChange(label) {
    if (visible === true) {
      handleChange(label);
    }
    setVisible(!visible);
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.days}>Day {label}</h3>
      <div className={styles.component}>
        {!visible && (
          <Link href={linkToCity}>
            <h2 className={styles.city}>{cityName}</h2>
          </Link>
        )}
        {visible ? (
          <div className={styles.cityForm}>
            <input
              className={styles.input}
              type="text"
              placeholder={placeHolder}
              onChange={inputChange}
            />
            <button className={styles.btn} onClick={handleCityChange}>
              change
            </button>
          </div>
        ) : (
          <button className={styles.penBtn} onClick={handleCityChange}>
            <PenIcon />
          </button>
        )}
        <p className={styles.places}>- {places} places</p>
        <Link href={linkToDay}>
          <span className={styles.editIcon}>
            <EditIcon />
          </span>
        </Link>
        <span className={styles.DragIcon}>
          <DragIcon />
        </span>
      </div>
    </div>
  );
}

export default PlanDetails;
