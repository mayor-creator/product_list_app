import type { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  children: ReactNode;
  className?: string;
  onClick: () => void;
}

export const Button = ({
  onClick,
  variant = "primary",
  size = "medium",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`button button--${variant} button--${size} ${className || ""}`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};
