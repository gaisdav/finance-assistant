import { FC } from "react";
import { observer } from "mobx-react-lite";

import styles from "./styles.module.scss";
import Card from "../../common/components/Card";
import Subtitle from "../../common/components/Subtitle";
import Calendar from "./components/Calendar";
import NavigationPanel from "../../common/components/NavigationPanel";
import { ICalendarVM } from "./interfaces";
import { IAmountVM } from "../../../ViewModels/AmountVM/interfaces";

interface IProps {
  calendarApi: ICalendarVM;
  amountVM: IAmountVM;
}

const Main: FC<IProps> = ({ calendarApi, amountVM: { totalLimit } }) => {
  const { card, balance } = styles;

  return (
    <>
      <Card className={card}>
        <Subtitle>Лимит на месяц: {totalLimit}</Subtitle>
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
      <NavigationPanel
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
