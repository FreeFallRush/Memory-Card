import "../styles/RulesModal.css";

function RulesModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Game Rules</h2>
        <p>Click on a Pokemon card.</p>
        <p>To get points, make sure you click each pokemon card only once.</p>
        <p>Clicking a card twice will reset the score.</p>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default RulesModal;
