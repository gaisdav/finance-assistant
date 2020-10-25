import React, { FC } from "react";
import classNames from "classnames";

import Card from "../Card";
import styles from "./styles.module.scss";

interface IProps {
  buttons: {
    text: string;
    active: boolean;
    onClick: () => void;
  }[];
}

const { navigatePanel, active } = styles;

const NavigatePanel: FC<IProps> = ({ buttons }) => {
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
