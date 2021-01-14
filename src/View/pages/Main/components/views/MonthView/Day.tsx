import { FC } from "react";
import { Observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { IDay } from "../../../interfaces";

interface IProps {
  day: IDay;
}

const getButtonType = (day: IDay): string => {
  return classNames(
    styles.day,
    { [styles.today]: day.isToday },
    { [styles.weekend]: day.isWeekendDay }
  );
};

const Day: FC<IProps> = ({ day }) => {
  return (
    <Observer>
      {() => <button className={getButtonType(day)}>{day.value}</button>}
    </Observer>
  );
};

export default Day;
