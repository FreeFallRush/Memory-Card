import "../styles/Button.css";

function Button({ children, onClick, type = "button", variant = "default" }) {
  return (
    <button className={`btn ${variant}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
