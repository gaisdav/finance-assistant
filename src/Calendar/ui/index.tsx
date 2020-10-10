import React, { FC } from "react";
import { observer } from "mobx-react-lite";

import Week from "./components/Week";
import { useStyles } from "./styles";

interface IProps {
  calendarApi: ICalendarVM;
}

const Calendar: FC<IProps> = ({ calendarApi }) => {
  const { monthWrapper } = useStyles();

  const {
    incrementMonth,
    monthString,
    decrementMonth,
    monthDays,
  } = calendarApi;

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
