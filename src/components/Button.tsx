import "../styles/Button.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "danger";
}

function Button({
  children,
  onClick,
  type = "button",
  variant = "default",
}: ButtonProps) {
  return (
    <button className={`btn ${variant}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
