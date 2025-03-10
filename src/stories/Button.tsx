import React from "react";
import "./Button.css";

interface ButtonProps {
  /** The text displayed on the button */
  label: string;
  onClick?: () => void;
  /** The variant of the button */
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
}) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
