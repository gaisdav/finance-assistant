import classNames from "classnames";
import React, { FC } from "react";
import styles from "./styles.module.scss";

interface IProps {
  className?: string | string[];
}

const Card: FC<IProps> = ({ children, className = "" }) => {
  const classes = classNames(styles.card, className);

  return <div className={classes}>{children}</div>;
};

export default Card;
