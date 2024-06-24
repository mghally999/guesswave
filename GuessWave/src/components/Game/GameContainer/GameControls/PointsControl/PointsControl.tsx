import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./PointsControl.module.scss";

interface PointsControlProps {
  points: number;
  setPoints: (points: number) => void;
  userPoints: number;
}

const PointsControl = ({ points, setPoints, userPoints }: PointsControlProps) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= userPoints) {
      setPoints(value);
    }
  };

  const handleIncrement = () => {
    if (points + 25 <= userPoints) {
      setPoints(points + 25);
    }
  };

  const handleDecrement = () => {
    if (points - 25 >= 0) {
      setPoints(points - 25);
    }
  };

  return (
    <div className={styles.control}>
      <span>Points</span>
      <div className={styles.controlInner}>
        <button onClick={handleDecrement}>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
        <input
          type="number"
          max={userPoints}
          value={points}
          onChange={handleInputChange}
          className={styles.input}
          title="Enter a valid points value"
        />
        <button onClick={handleIncrement}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </div>
  );
};

export default PointsControl;
