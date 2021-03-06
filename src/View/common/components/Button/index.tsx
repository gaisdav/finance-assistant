import { FC } from "react";
import { IProps } from "./interfaces";
import styles from "./styles.module.scss";
import classNames from "classnames";

const {
  button,
  error,
  success,
  main,
  secondary,
  small,
  large,
  filled,
  outlined,
  base,
} = styles;

const Button: FC<IProps> = ({
  className = "",
  children,
  variant = "filled",
  type = "base",
  size = "default",
  onClick,
  loading,
}) => {
  let classes = button;

  switch (type) {
    case "error":
      classes = classNames(classes, error);
      break;
    case "success":
      classes = classNames(classes, success);
      break;
    case "main":
      classes = classNames(classes, main);
      break;
    case "secondary":
      classes = classNames(classes, secondary);
      break;
    case "base":
      classes = classNames(classes, base);
      break;
  }

  switch (size) {
    case "small":
      classes = classNames(classes, small);
      break;
    case "large":
      classes = classNames(classes, large);
      break;
  }

  switch (variant) {
    case "outlined":
      classes = classNames(classes, outlined);
      break;
    case "filled":
      classes = classNames(classes, filled);
      break;
  }

  classes = classNames(classes, className);

  return (
    <button onClick={onClick} className={classes}>
      {loading ? "загрузка" : children}
    </button>
  );
};

export default Button;
