import Button from "./Button";
import "../styles/Header.css";

interface HeaderProps {
  onShowRules: () => void;
}

function Header({ onShowRules }: HeaderProps) {
  return (
    <header>
      <h1>Pokemon Memory Game</h1>
      <Button onClick={onShowRules}>Rules</Button>
    </header>
  );
}

export default Header;
