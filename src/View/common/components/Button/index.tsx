import { FC } from "react";
import { IProps } from "./interfaces";

const Button: FC<IProps> = ({ children, variant }) => {
  return <button>{children}</button>;
};

export default Button;
