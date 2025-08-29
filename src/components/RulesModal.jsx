function RulesModal({isOpen, onClose}) {
    if(!isOpen) return null;

    return(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Game Rules</h2>
                <p>Click on a Pokemon card.</p>
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default RulesModal;