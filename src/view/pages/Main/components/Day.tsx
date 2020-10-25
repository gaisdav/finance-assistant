import React, { FC } from "react";
import Fab from "@material-ui/core/Fab";
import { PropTypes } from "@material-ui/core";
import { observer } from "mobx-react";

import { useStyles } from "../styles";

interface IProps {
  day: IDay;
}

const getButtonType = (day: IDay): PropTypes.Color => {
  if (day.isToday) {
    return "primary";
  }

  if (day.isWeekendDay) {
    return "secondary";
  }

  return "default";
};

const Day: FC<IProps> = ({ day }) => {
  const { dayWrapper } = useStyles();

  return (
    <Fab
      className={dayWrapper}
      disabled={!day.isCurrentMonthDay}
      size="small"
      color={getButtonType(day)}
    >
      {day.value}
    </Fab>
  );
};

export default observer(Day);
