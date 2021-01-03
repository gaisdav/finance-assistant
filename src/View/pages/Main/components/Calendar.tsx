import React, { FC } from "react";
import styles from "./styles.module.scss";
import { observer } from "mobx-react";
import Card from "../../../common/components/Card";
import { ICalendarVM } from "../interfaces";
import MonthView from "./views/MonthView/MonthView";
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

export default observer(Calendar);
