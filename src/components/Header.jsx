import "../styles/Header.css";

function Header({ onShowRules }) {
  return (
    <header>
      <h1>Pokemon Memory Game</h1>
      <button className="rules-btn" onClick={onShowRules}>
        Rules
      </button>
    </header>
  );
}

export default Header;
