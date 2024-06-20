import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/components/PointsControl.module.scss";

interface PointsControlProps {
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  userPoints: number;
}

const PointsControl: React.FC<PointsControlProps> = ({ points, setPoints, userPoints }) => {
  return (
    <div className={styles.control}>
      <span>Points</span>
      <div className={styles.controlInner}>
        <button 
        title="down"
        onClick={() => setPoints((prev) => prev - 25)}>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
        <input
          placeholder="point"
          max={userPoints}
          value={points}
          onChange={(e) => setPoints(parseInt(e.target.value))}
        />
        <button 
        title="up"
        onClick={() => setPoints((prev) => prev + 25)}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </div>
  );
};

export default PointsControl;
