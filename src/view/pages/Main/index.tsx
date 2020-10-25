import React, { FC } from "react";
import { observer } from "mobx-react-lite";

import Card from "../../common/components/Card";
import styles from "./styles.module.scss";
import Subtitle from "../../common/components/Subtitle";
import Calendar from "./components/Calendar";

interface IProps {
  calendarApi: ICalendarVM;
}

const Main: FC<IProps> = ({ calendarApi }) => {
  return (
    <>
      <Card className={styles.card}>
        <Subtitle>Лимит на месяц: 20 000 руб.</Subtitle>
      </Card>
      <Card className={styles.card}>
        <div className={styles.balance}>Остаток на месяц: 15 500 руб.</div>
        <div>Дневной остаток: 700 руб.</div>
      </Card>
      <Card className={styles.card}>
        <div className={styles.balance}>Остаток на месяц: 15 500 руб.</div>
        <div className={styles.balance}>Остаток на месяц: 15 500 руб.</div>
        <div>Дневной остаток: 700 руб.</div>
      </Card>
      <Card className={styles.calendarWrapper}>
        <Calendar calendarApi={calendarApi}>Calendar</Calendar>
      </Card>
    </>
  );
};

export default observer(Main);
