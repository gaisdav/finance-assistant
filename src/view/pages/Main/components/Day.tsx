import React, { FC } from "react";
import { observer } from "mobx-react";

interface IProps {
  day: IDay;
}

const getButtonType = (day: IDay): string => {
  if (day.isToday) {
    return "primary";
  }

  if (day.isWeekendDay) {
    return "secondary";
  }

  return "default";
};

const Day: FC<IProps> = ({ day }) => {
  return <div color={getButtonType(day)}>{day.value}</div>;
};

export default observer(Day);
