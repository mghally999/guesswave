import { useEffect, useState } from "react";
import styles from "./GameHeader.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCoins, faClock } from "@fortawesome/free-solid-svg-icons";

interface GameHeaderProps {
  username: string;
  points: number;
}

const GameHeader = ({ username, points }: GameHeaderProps) => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.userInfo}>
      <div className={styles.infoBox}>
        <FontAwesomeIcon icon={faCoins} className={styles.icon} />
        {username && <span>{points} Points</span>}
      </div>
      <div className={styles.infoBox}>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        {username && <span>{username}</span>}
      </div>
      <div className={styles.infoBox}>
        <FontAwesomeIcon icon={faClock} className={styles.icon} />
        {username && <span>{currentTime}</span>}
      </div>
    </div>
  );
};

export default GameHeader;
