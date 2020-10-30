import React, { FC } from "react";
import Week from "./Week";
import styles from "./styles.module.scss";
import Subtitle from "../../../common/components/Subtitle";
import { observer } from "mobx-react";
import Card from "../../../common/components/Card";

/**
 * Интерфейс календаря.
 */
interface IProps {
  /**
   * View Model календаря
   */
  calendarApi: ICalendarVM;
}

/**
 * Компонент календаря.
 */
const Calendar: FC<IProps> = ({ calendarApi }) => {
  const { incrementMonth, monthTitle, decrementMonth, monthDays } = calendarApi;

  return (
    <Card className={styles.calendarWrapper}>
      <div className={styles.month}>
        <div className={styles.controls}>
          <button className={styles.prev} onClick={decrementMonth}>
            сюда
          </button>
          <div className={styles.monthTitle}>
            <Subtitle>{monthTitle}</Subtitle>
          </div>
          <button className={styles.next} onClick={incrementMonth}>
            туда
          </button>
        </div>

        <div className={styles.weekNames}>
          <div>пн</div>
          <div>вт</div>
          <div>ср</div>
          <div>чт</div>
          <div>пт</div>
          <div className={styles.weekend}>сб</div>
          <div className={styles.weekend}>вс</div>
        </div>

        <div className={styles.weekWrapper}>
          {monthDays.map((week, index) => (
            <Week key={index} week={week} />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default observer(Calendar);
