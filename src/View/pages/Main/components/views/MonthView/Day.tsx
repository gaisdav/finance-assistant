import { FC } from "react";
import { observer } from "mobx-react";
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
  return <button className={getButtonType(day)}>{day.value}</button>;
};

export default observer(Day);
