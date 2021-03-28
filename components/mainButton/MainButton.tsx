import ArrowRightIcon from "../icons/ArrowRightIcon";
import styles from "./MainButton.module.css";

export type MainButtonProps = {
  label: string;
  days: number;
  startCity: string;
  endCity: string;
  link: string;
};

function MainButton({
  label,
  days,
  startCity,
  endCity,
  link,
}: MainButtonProps) {
  function addCitysToArray(arr: string[]) {
    arr[0] = startCity;
    arr.push(endCity);
    localStorage.setItem("locations", JSON.stringify(arr));
  }

  async function handleButtonClick() {
    if (days < 1) {
      alert("The end date must be after the start date!");
      return;
    }
    if (days === undefined) {
      alert("Please select start- and end Date first!");
      return;
    }

    const storedLocation = localStorage.getItem("locations");
    if (storedLocation === null) {
      const arr = Array(days - 1).fill("no City");
      addCitysToArray(arr);
      location.href = link;
      return;
    }
    if (JSON.parse(storedLocation).length < days) {
      const daysPlusDays = JSON.parse(storedLocation).length + days;
      const arr = Array(
        daysPlusDays - JSON.parse(storedLocation).length - 1
      ).fill("no City");
      addCitysToArray(arr);
      location.href = link;
      return;
    }
    if (JSON.parse(storedLocation).length > days) {
      if (
        confirm(
          "Your original plan was longer. We are creating a new plan now. Your old plan will be deleted!"
        )
      ) {
        const arr = Array(days - 1).fill("no City");
        addCitysToArray(arr);
        location.href = link;
        return;
      }
    }
    if (JSON.parse(storedLocation).length === days) {
      location.href = link;
      return;
    }
  }

  return (
    <button className={styles.btn} onClick={handleButtonClick}>
      {label}
      <span className={styles.icon}>
        <ArrowRightIcon />
      </span>
    </button>
  );
}

export default MainButton;
