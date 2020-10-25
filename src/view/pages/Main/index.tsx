import React, { FC } from "react";
import { observer } from "mobx-react-lite";

import Week from "./components/Week";
import Card from "../../common/components/Card";
import styles from "./styles.module.scss";

interface IProps {
  calendarApi: ICalendarVM;
}

const Main: FC<IProps> = ({ calendarApi }) => {
  const {
    incrementMonth,
    monthString,
    decrementMonth,
    monthDays,
  } = calendarApi;

  return (
    <>
      <Card className={styles.card}>Лимит на месяц: 20 000 руб.</Card>
      <Card className={styles.card__secondary}>
        <div>Остаток на месяц: 15 500 руб.</div>
        <div>Дневной остаток: 700 руб.</div>
      </Card>
      {/*<div className={monthWrapper}>*/}
      {/*  <div>*/}
      {/*    <div onClick={incrementMonth}>туда</div>*/}
      {/*    <div>{monthString}</div>*/}
      {/*    <div onClick={decrementMonth}>сюда</div>*/}
      {/*  </div>*/}

      {/*  {monthDays.map((week, index) => (*/}
      {/*    <Week key={index} week={week} />*/}
      {/*  ))}*/}
      {/*</div>*/}
    </>
  );
};

export default observer(Main);
