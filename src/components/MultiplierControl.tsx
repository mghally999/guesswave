import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/components/MultiplierControl.module.scss";

interface MultiplierControlProps {
  multiplier: number;
  setMultiplier: (multiplier: number) => void;
}

const MultiplierControl: React.FC<MultiplierControlProps> = ({
  multiplier,
  setMultiplier,
}) => {
  const handleDecrement = () => {
    setMultiplier((prev: number) => prev - 0.25);
  };

  const handleIncrement = () => {
    setMultiplier((prev: number) => prev + 0.25);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMultiplier(parseFloat(e.target.value));
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
          onChange={handleChange}
          className={styles.input}
        />
        <button onClick={handleIncrement}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </div>
  );
};

export default MultiplierControl;
