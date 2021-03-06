import { FC } from "react";
import styles from "./styles.module.scss";
import { Observer } from "mobx-react-lite";
import Card from "../../../common/components/Card";
import { ICalendarVM } from "../interfaces";
// import WeekView from "./views/WeekView/WeekView";
import MonthView from "./views/MonthView/MonthView";

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
  return (
    <Observer>
      {() => (
        <Card className={styles.calendarWrapper}>
          <MonthView calendarApi={calendarApi} />
          {/*<WeekView calendarApi={calendarApi} />*/}
        </Card>
      )}
    </Observer>
  );
};

export default Calendar;
