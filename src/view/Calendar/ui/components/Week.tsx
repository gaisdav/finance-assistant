import React, { FC } from "react";
import { observer } from "mobx-react";

import Day from "./Day";
import { useStyles } from "../styles";

interface IProps {
  week: IDay[];
}

const Week: FC<IProps> = ({ week }) => {
  const { weekWrapper } = useStyles();

  return (
    <div className={weekWrapper}>
      {week.map((date, index) => (
        <Day key={index} day={date} />
      ))}
    </div>
  );
};

export default observer(Week);
