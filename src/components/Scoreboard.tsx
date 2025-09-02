import "../styles/Scoreboard.css";

interface ScoreboardProps {
  score: number;
  bestScore: number;
}

function Scoreboard({ score, bestScore }: ScoreboardProps) {
  return (
    <div className="scoreboard">
      <p>Score: {score}</p>
      <p>Best score: {bestScore}</p>
    </div>
  );
}

export default Scoreboard;
