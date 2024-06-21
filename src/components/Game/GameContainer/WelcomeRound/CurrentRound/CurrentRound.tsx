import styles from "./CurrentRound.module.scss";

interface Player {
  username: string;
  points: number;
  multiplier: number;
}

interface CurrentRoundProps {
  currentRound: Player[];
  username: string;
  reveal: boolean;
  multiplier: number;
}

const CurrentRound = ({
  currentRound,
  username,
  reveal,
  multiplier,
}: CurrentRoundProps) => {
  const players = currentRound as Player[];

  return (
    <div>
      {players.length === 0 ? (
        <p>No data available</p>
      ) : (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Username</th>
                <th>Points</th>
                <th>Multiplier</th>
              </tr>
            </thead>
            <tbody>
              {players &&
                players.map((player, index) => (
                  <tr
                    key={index}
                    className={`${styles.tableRow} ${
                      player.username === username
                        ? styles.highlightRow
                        : index % 2 === 0
                        ? styles.background1
                        : styles.background2
                    }`}
                    style={{
                      color: reveal
                        ? player.multiplier < multiplier
                          ? "#326a54"
                          : "#cf314b"
                        : "#fff",
                    }}
                  >
                    <td className={styles.username}>{player.username}</td>
                    <td>{player.points}</td>
                    <td>{player.multiplier}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CurrentRound;
