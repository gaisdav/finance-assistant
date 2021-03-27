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
  /**
   * Признак загрузки.
   */
  loading?: boolean;
}

/**
 * Компонент "карточка"
 */
const Card: FC<IProps> = ({ children, className = "", loading = false }) => {
  const classes = classNames(styles.card, className);

  return (
    <div className={classes}>
      {loading && <div>loading</div>}
      {children}
    </div>
  );
};

export default Card;
