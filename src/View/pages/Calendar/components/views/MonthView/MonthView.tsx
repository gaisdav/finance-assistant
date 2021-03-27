import React, { FC } from "react";
import viewStyles from "./styles.module.scss";
import styles from "../../styles.module.scss";
import Week from "./Week";
import { ICalendarVM } from "../../../interfaces";
import { Observer } from "mobx-react-lite";

/**
 * Интерфейс календаря.
 */
interface IProps {
  /**
   * View Model календаря
   */
  calendarApi: ICalendarVM;
}

const MonthView: FC<IProps> = ({ calendarApi }) => {
  return (
    <Observer>
      {() => {
        const {
          incrementMonth,
          monthTitle,
          decrementMonth,
          monthDays,
        } = calendarApi;

        return (
          <div className={viewStyles.month}>
            <div className={styles.controls}>
              <button className={styles.prev} onClick={decrementMonth}>
                сюда
              </button>
              <div className={styles.monthTitle}>
                <h4>{monthTitle}</h4>
              </div>
              <button className={styles.next} onClick={incrementMonth}>
                туда
              </button>
            </div>

            <div className={viewStyles.weekNames}>
              <div>пн</div>
              <div>вт</div>
              <div>ср</div>
              <div>чт</div>
              <div>пт</div>
              <div className={styles.weekend}>сб</div>
              <div className={styles.weekend}>вс</div>
            </div>

            <div className={viewStyles.weekWrapper}>
              {monthDays.map((week, index) => (
                <Week key={index} week={week} />
              ))}
            </div>
          </div>
        );
      }}
    </Observer>
  );
};

export default MonthView;
