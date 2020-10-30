import React, { FC } from "react";
import { observer } from "mobx-react-lite";

import styles from "./styles.module.scss";
import Card from "../../common/components/Card";
import Subtitle from "../../common/components/Subtitle";
import Calendar from "./components/Calendar";
import NavigatePanel from "../../common/components/NavigatePanel";

interface IProps {
  calendarApi: ICalendarVM;
}

const Main: FC<IProps> = ({ calendarApi }) => {
  const { card, balance, calendarWrapper } = styles;

  return (
    <>
      <Card className={card}>
        <Subtitle>Лимит на месяц: 20 000 руб.</Subtitle>
      </Card>
      <Card className={card}>
        <div className={balance}>Остаток на месяц: 15 500 руб.</div>
        <div>Дневной остаток: 700 руб.</div>
      </Card>
      <Card className={card}>
        <div className={balance}>Остаток на месяц: 15 500 руб.</div>
        <div className={balance}>Остаток на месяц: 15 500 руб.</div>
        <div>Дневной остаток: 700 руб.</div>
      </Card>
      <Calendar calendarApi={calendarApi}>Calendar</Calendar>
      <NavigatePanel
        buttons={[
          {
            text: "Календарь",
            active: true,
            onClick: () => {},
          },
          {
            text: "Графики",
            active: false,
            onClick: () => {},
          },
        ]}
      />
    </>
  );
};

export default observer(Main);
