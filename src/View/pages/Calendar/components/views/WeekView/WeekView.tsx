import { FC } from "react";
import viewStyles from "./styles.module.scss";
import styles from "../../styles.module.scss";
import { ICalendarVM } from "../../../interfaces";
import Subtitle from "../../../../../common/components/Subtitle";
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

const WeekView: FC<IProps> = ({ calendarApi }) => {
  const { incrementMonth, monthTitle, decrementMonth } = calendarApi;

  return (
    <Observer>
      {() => (
        <div className={viewStyles.week}>
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
          <div className={viewStyles.weekWrapper}>
            <div className={viewStyles.dayNames}>
              <div>пн</div>
              <div>вт</div>
              <div>ср</div>
              <div>чт</div>
              <div>пт</div>
              <div className={styles.weekend}>сб</div>
              <div className={styles.weekend}>вс</div>
            </div>
            <div className={viewStyles.days}>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div className={styles.weekend}>6</div>
              <div className={styles.weekend}>7</div>
            </div>
          </div>
        </div>
      )}
    </Observer>
  );
};

export default WeekView;
