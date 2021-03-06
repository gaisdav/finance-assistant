import { FC } from "react";
import { Observer } from "mobx-react-lite";
import Day from "./Day";
import styles from "./styles.module.scss";
import { IDay } from "../../../interfaces";

interface IProps {
  week: IDay[];
}

const Week: FC<IProps> = ({ week }) => {
  return (
    <Observer>
      {() => (
        <div className={styles.week}>
          {week.map((date, index) => (
            <Day key={index} day={date} />
          ))}
        </div>
      )}
    </Observer>
  );
};

export default Week;
