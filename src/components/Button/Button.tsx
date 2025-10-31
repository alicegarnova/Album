import { PropsWithChildren } from "react";
import "./Button.css";

interface IProps {
  isActive?: boolean;
  onClick: () => void;
}

export const Button = ({
  isActive,
  children,
  onClick,
}: PropsWithChildren<IProps>) => {
  return (
    <button
      onClick={onClick}
      className={isActive ? "button_active" : "button_unactive"}
    >
      {children}
    </button>
  );
};
