import React from "react";
import styles from "../styles/components/Game.module.scss";
import Welcome from "./Welcome";
import PointsControl from "./PointsControl";
import MultiplierControl from "./MultiplierControl";
import CurrentRound from "./CurrentRound";
import SpeedControl from "./SpeedControl";
import MultiplierChart from "./MultiplierChart";
import UserInfo from "./UserInfo";
import Chat from "./Chat";
import Ranking from "./Ranking";
import useGame from "../hooks/useGame";

const Game: React.FC = () => {
  const {
    triggerAnimation,
    username,
    setUsername,
    points,
    setPoints,
    userPoints,
    setUserPoints,
    multiplier,
    setMultiplier,
    speed,
    setSpeed,
    result,
    revealCurrentRoundResult,
    buttonState,
    data,
    records,
    currentRound,
    handleNameSubmit,
    handleStartClick,
  } = useGame();

  return (
    <div className={styles.game}>
      <div className={styles.topPane}>
        <div className={styles.topPaneLeft}>
          {!username && <Welcome handleNameSubmit={handleNameSubmit} />}
          {username && (
            <center>
              <div className={styles.row}>
                <PointsControl
                  points={points}
                  setPoints={setPoints}
                  userPoints={userPoints}
                />
                <MultiplierControl
                  multiplier={multiplier}
                  setMultiplier={setMultiplier}
                />
              </div>
              <div>
                <button
                  className={styles.start_button}
                  onClick={handleStartClick}
                  disabled={buttonState.disabled}
                >
                  {buttonState.text}
                </button>
              </div>
              <CurrentRound
                currentRound={currentRound}
                username={username}
                multiplier={result}
                reveal={revealCurrentRoundResult}
              />
              <SpeedControl speed={speed} setSpeed={setSpeed} />
            </center>
          )}
        </div>
        <div className={styles.topPaneRight}>
          <UserInfo username={username} points={userPoints} />
          <MultiplierChart
            data={data}
            animationDuration={12000 / speed}
            triggerAnimation={triggerAnimation}
          />
        </div>
      </div>
      <div className={styles.bottomPane}>
        <Ranking username={username} records={records} />
        <Chat username={username} />
      </div>
    </div>
  );
};

export default Game;
