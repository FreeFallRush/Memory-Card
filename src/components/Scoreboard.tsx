import "../styles/Scoreboard.css";

function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <p>Score: {score}</p>
      <p>Best score: {bestScore}</p>
    </div>
  );
}

export default Scoreboard;
