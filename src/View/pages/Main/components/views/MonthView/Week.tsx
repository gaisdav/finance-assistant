import React, { FC } from "react";
import { observer } from "mobx-react";

import Day from "./Day";
import styles from "./styles.module.scss";
import { IDay } from "../../../interfaces";

interface IProps {
  week: IDay[];
}

const Week: FC<IProps> = ({ week }) => {
  return (
    <div className={styles.week}>
      {week.map((date, index) => (
        <Day key={index} day={date} />
      ))}
    </div>
  );
};

export default observer(Week);
