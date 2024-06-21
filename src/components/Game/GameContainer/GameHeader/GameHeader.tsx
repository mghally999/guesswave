import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import styles from "./GameHeader.module.scss";

const GameHeader = () => {
  return (
    <div className={styles.header}>
      <FontAwesomeIcon icon={faTrophy} className={styles.trophyIcon} />
      <h2>Current Round</h2>
    </div>
  );
};

export default GameHeader;
