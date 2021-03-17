import { FC } from "react";
import { button } from "@storybook/addon-knobs";
import classNames from "classnames";
import styles from "./styles.module.scss";

export interface IProps {
  className?: string;
  onClick: () => void;
}

const IconButton: FC<IProps> = ({ children, className, onClick }) => {
  const classes = classNames(styles.button, className);

  return (
    <button disabled={true} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default IconButton;
