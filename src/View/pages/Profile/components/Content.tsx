import { FC } from "react";
import IconButton from "../../../common/components/IconButton";
import { ReactComponent as EditIcon } from "../../../common/assets/icons/edit.svg";
import Subtitle from "../../../common/components/Subtitle";
import Card from "../../../common/components/Card";
import styles from "../styles.module.scss";

/**
 * Интерфейс компонента страницы пользователя.
 */
export interface IProps {
  /**
   * Ф.И.О. пользователя.
   */
  name: string;
  /**
   * Тема приложения.
   */
  theme: string;
}

const Content: FC<IProps> = ({ name, theme }) => {
  const { row, editIcon } = styles;

  return (
    <Card>
      <IconButton className={editIcon} onClick={() => {}}>
        <EditIcon />
      </IconButton>
      <div className={row}>
        <Subtitle>ФИО:</Subtitle>
        <span>{name}</span>
      </div>
      <div className={row}>
        <Subtitle>Тема приложения:</Subtitle>
        <span>{theme}</span>
      </div>
    </Card>
  );
};

export default Content;
