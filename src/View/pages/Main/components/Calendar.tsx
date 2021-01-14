import { FC } from "react";
import styles from "./styles.module.scss";
import Subtitle from "../../../common/components/Subtitle";
import { Observer } from "mobx-react-lite";
import Card from "../../../common/components/Card";
import { ICalendarVM } from "../interfaces";
import WeekView from "./views/WeekView/WeekView";

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
    <Card className={styles.calendarWrapper}>
      {/*<MonthView calendarApi={calendarApi} />*/}
      <WeekView calendarApi={calendarApi} />
    </Card>
  );
};

export default Calendar;
