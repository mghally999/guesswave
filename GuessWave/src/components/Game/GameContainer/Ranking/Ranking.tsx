import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import styles from "./Ranking.module.scss";

interface Player {
  username: string;
  score: number;
}

interface RankingProps {
  records: Player[];
  username: string;
}

const Ranking = ({ records, username }: RankingProps) => {
  return (
    <div className={styles.rankingContainer}>
      <div className={styles.header}>
        <FontAwesomeIcon icon={faChartSimple} className={styles.trophyIcon} />
        <h2>Ranking</h2>
      </div>
      {records.length === 0 ? (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, index) => (
                <tr
                  key={index}
                  className={`${styles.tableRow} ${
                    index % 2 === 0 ? styles.background1 : styles.background2
                  }`}
                >
                  <td>{index + 1}</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr
                  key={index}
                  className={`${styles.tableRow} ${
                    record.username === username
                      ? styles.highlightRow
                      : index % 2 === 0
                      ? styles.background1
                      : styles.background2
                  }`}
                >
                  <td>{index + 1}</td>
                  <td>{record.username}</td>
                  <td>{record.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Ranking;
