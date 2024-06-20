import { useState } from "react";
import { generatePositiveGradientData } from "../utils";

interface ResultItem {
  username: string;
  score: number;
}

const useGame = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [username, setUsername] = useState("");
  const [points, setPoints] = useState(100);
  const [userPoints, setUserPoints] = useState(1000);
  const [multiplier, setMultiplier] = useState(1);
  const [speed, setSpeed] = useState(1);
  const [result, setResult] = useState(0);
  const [revealCurrentRoundResult, setRevealCurrentRoundResult] =
    useState(false);
  const [buttonState, setButtonState] = useState({
    text: "Start",
    disabled: false,
  });
  const [data, setData] = useState(generatePositiveGradientData(9));
  const [records, setRecords] = useState<ResultItem[]>([]);
  const [allResults, setAllResults] = useState<ResultItem[]>([]);
  const [currentRound, setCurrentRound] = useState([
    { username, points, multiplier },
    { username: "cpu0", points: 0, multiplier: 1 },
    { username: "cpu1", points: 0, multiplier: 1 },
    { username: "cpu2", points: 0, multiplier: 1 },
    { username: "cpu3", points: 0, multiplier: 1 },
  ]);

  const handleNameSubmit = (username: string) => {
    setCurrentRound([
      { username, points, multiplier },
      { username: "cpu0", points: 0, multiplier: 1 },
      { username: "cpu1", points: 0, multiplier: 1 },
      { username: "cpu2", points: 0, multiplier: 1 },
      { username: "cpu3", points: 0, multiplier: 1 },
    ]);
    setUsername(username);
  };

  const handleStartClick = () => {
    setUserPoints(userPoints - points);
    const result_new = Math.floor(Math.random() * 90) / 10 + 1;
    setResult(result_new);
    setData(generatePositiveGradientData(result_new));
    setTriggerAnimation(true);
    setButtonState({ text: "Started", disabled: true });
    setTimeout(
      () => setButtonState({ text: "Start Again", disabled: false }),
      2000
    );
    setTimeout(() => setTriggerAnimation(false), 20000 / speed);

    const roundResults = [
      { username, points, multiplier },
      {
        username: "cpu0",
        points: Math.floor(Math.random() * 24 + 1) * 25,
        multiplier: Math.floor(Math.random() * 100) / 10,
      },
      {
        username: "cpu1",
        points: Math.floor(Math.random() * 24 + 1) * 25,
        multiplier: Math.floor(Math.random() * 100) / 10,
      },
      {
        username: "cpu2",
        points: Math.floor(Math.random() * 24 + 1) * 25,
        multiplier: Math.floor(Math.random() * 100) / 10,
      },
      {
        username: "cpu3",
        points: Math.floor(Math.random() * 24 + 1) * 25,
        multiplier: Math.floor(Math.random() * 100) / 10,
      },
    ];
    setRevealCurrentRoundResult(false);

    setTimeout(() => {
      setRevealCurrentRoundResult(true);
      setCurrentRound(roundResults);
    }, 12000 / speed);

    if (result_new > multiplier) {
      setUserPoints(userPoints + points * multiplier);
    }

    const newResults: ResultItem[] = roundResults.map((result) => ({
      username: result.username,
      score: Math.floor(result.points * result.multiplier),
    }));

    const validResults = newResults.filter((result) => result.score > 0);

    const uniqueResults = [...allResults, ...validResults].reduce<ResultItem[]>(
      (acc, current) => {
        const x = acc.find((item) => item.username === current.username);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      },
      []
    );

    const topResults = uniqueResults
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    setAllResults(uniqueResults);
    setRecords(topResults);
  };

  return {
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
  };
};

export default useGame;
