import { FC } from "react";
import { IProps } from "./interfaces";

const Button: FC<IProps> = ({
  children,
  variant = "base",
  type = "base",
  size = "default",
}) => {
  return <button>{children}</button>;
};

export default Button;
