import React, { FC } from "react";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({
  className,
  onClick,
  children,
  type,
  disabled,
  ariaLabel,
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
