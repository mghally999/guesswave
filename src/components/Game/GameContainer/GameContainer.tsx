import React from "react";
import styles from "./GameContainer.module.scss";
import Welcome from "./WelcomeRound/Welcome/Welcome";
import PointsControl from "../GameControls/PointsControl/PointsControl";
import MultiplierControl from "../GameControls/MultiplierControl/MultiplierControl";
import CurrentRound from "./WelcomeRound/CurrentRound/CurrentRound";
import SpeedControl from "../GameControls/SpeedControl/SpeedControl";
import MultiplierChart from "./MultiplierChart/MultiplierChart";
import UserInfo from "../../UserInfo";
import Chat from "./Chat/Chat";
import Ranking from "./Ranking/Ranking";
import useGame from "../../../hooks/useGame";
import GameHeader from "./GameHeader/GameHeader";

const GameContainer: React.FC = () => {
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
    <>
      <div className={styles.topPane}>
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
            <GameHeader />
            <CurrentRound
              currentRound={currentRound}
              username={username}
              multiplier={result}
              reveal={revealCurrentRoundResult}
            />
            <SpeedControl speed={speed} setSpeed={setSpeed} />
          </center>
        )}
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
    </>
  );
};

export default GameContainer;
