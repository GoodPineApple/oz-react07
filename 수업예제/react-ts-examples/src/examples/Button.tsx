// 함수 Props
import React from "react";

interface ButtonProps {
  label: string;
  size?: "small" | "large"; // Optional
  onClick: (value: string) => void;
}

const Button: React.FC<ButtonProps> = ({ label, size = "small", onClick }) => {
  return (
    <button className={size} onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Button;
