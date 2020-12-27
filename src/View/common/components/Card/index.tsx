import classNames from "classnames";
import { FC } from "react";
import styles from "./styles.module.scss";

/**
 * Интерфейс компонента.
 */
export interface IProps {
  /**
   * Передаваемые стили.
   */
  className?: string | string[];
}

/**
 * Компонент "карточка"
 */
const Card: FC<IProps> = ({ children, className = "" }) => {
  const classes = classNames(styles.card, className);

  return <div className={classes}>{children}</div>;
};

export default Card;
