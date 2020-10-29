import React, { FC } from "react";
import classNames from "classnames";

import Card from "../Card";
import styles from "./styles.module.scss";

export interface INavigatePanelProps {
  buttons: {
    text: string;
    active: boolean;
    onClick: () => void;
  }[];
}

const { navigatePanel, active } = styles;

const NavigatePanel: FC<INavigatePanelProps> = ({ buttons }) => {
  return (
    <Card className={navigatePanel}>
      {buttons.map((button, index) => (
        <button key={index} className={classNames({ [active]: button.active })}>
          {button.text}
        </button>
      ))}
    </Card>
  );
};

export default NavigatePanel;
