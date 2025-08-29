function GameOverModal({ isOpen, onClose, onReset, bestScore }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Game Over!</h2>
        <p>You clicked the same card twice ❌</p>
        <p>Best Score: {bestScore}</p>
        <div className="modal-buttons">
          <button onClick={onClose}>Play Again</button>
          <button onClick={onReset}>Reset Best Score</button>
        </div>
      </div>
    </div>
  );
}

export default GameOverModal;
