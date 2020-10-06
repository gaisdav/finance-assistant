import React, { FC } from "react";
import { observer } from "mobx-react";

import CalendarVm from "../vm/calendar.vm";
import CalendarService from "../service/calendar.service";
import Week from "./components/Week";
import { useStyles } from "./styles";

const service = new CalendarService();
const {
  monthString,
  monthDays,
  decrementMonth,
  incrementMonth,
} = new CalendarVm(service);

const Calendar: FC = () => {
  const { monthWrapper } = useStyles();

  return (
    <div className={monthWrapper}>
      <div>
        <div onClick={incrementMonth}>туда</div>
        <div>{monthString}</div>
        <div onClick={decrementMonth}>сюда</div>
      </div>

      {monthDays.map((week, index) => (
        <Week key={index} week={week} />
      ))}
    </div>
  );
};

export default observer(Calendar);
