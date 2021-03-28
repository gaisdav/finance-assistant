import { FC } from "react";
import styles from "../../styles.module.scss";
import Card from "../../../../common/components/Card";
import Button from "../../../../common/components/Button";

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
  const { row } = styles;

  return (
    <>
      <Card className={row}>
        <h4>ФИО:</h4>
        <span>{name}</span>
      </Card>

      <Card className={row}>
        <h4>Тема приложения:</h4>
        <span>{theme}</span>
      </Card>

      <Button type="success">Редактировать</Button>
    </>
  );
};

export default Content;
