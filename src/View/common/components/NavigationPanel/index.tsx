import { FC } from "react";
import classNames from "classnames";

import Card from "../Card";
import styles from "./styles.module.scss";

export interface INavigationPanelProps {
  buttons: {
    text: string;
    active?: boolean;
    onClick: () => void;
  }[];
}

const { navigationPanel, active } = styles;

const NavigationPanel: FC<INavigationPanelProps> = ({ buttons }) => {
  return (
    <Card className={navigationPanel}>
      {buttons.map((button, index) => (
        <button
          key={index}
          className={classNames({ [active]: Boolean(button.active) })}
        >
          {button.text}
        </button>
      ))}
    </Card>
  );
};

export default NavigationPanel;
