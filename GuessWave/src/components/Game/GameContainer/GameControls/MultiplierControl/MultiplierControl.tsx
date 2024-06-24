import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./MultiplierControl.module.scss";

interface MultiplierControlProps {
  multiplier: number;
  setMultiplier: (multiplier: number) => void;
}

const MultiplierControl = ({
  multiplier,
  setMultiplier,
}: MultiplierControlProps) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setMultiplier(value);
    }
  };

  const handleIncrement = () => {
    if (multiplier + 0.25 >= 0) {
      setMultiplier(multiplier + 0.25);
    }
  };

  const handleDecrement = () => {
    if (multiplier - 0.25 >= 0) {
      setMultiplier(multiplier - 0.25);
    }
  };

  return (
    <div className={styles.control}>
      <span>Multiplier</span>
      <div className={styles.controlInner}>
        <button onClick={handleDecrement}>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
        <input
          type="number"
          value={multiplier}
          step="0.01"
          onChange={handleInputChange}
          className={styles.input}
          title="Enter a positive multiplier value"
        />
        <button onClick={handleIncrement}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </div>
  );
};

export default MultiplierControl;
