import Button from "./Button";
import "../styles/Header.css";

function Header({ onShowRules }) {
  return (
    <header>
      <h1>Pokemon Memory Game</h1>
      <Button onClick={onShowRules}>Rules</Button>
    </header>
  );
}

export default Header;
