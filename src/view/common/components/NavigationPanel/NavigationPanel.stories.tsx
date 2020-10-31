import React from "react";
import { INavigationPanelProps } from "./index";
import { Story } from "@storybook/react/types-6-0";
import NavigationPanel from "./index";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";

export default {
  title: "Components/NavigationPanel",
  component: NavigationPanel,
};

const Template: Story<INavigationPanelProps> = (args) => (
  <NavigationPanel {...args} />
);

export const NavigationPanelComponent = Template.bind({});
NavigationPanelComponent.args = {
  buttons: [
    {
      text: "label",
      active: boolean("active", true),
      onClick: action("NavigationPanelComponent"),
    },
    {
      text: "labelasd",
      active: boolean("active2", false),
      onClick: action("NavigationPanelComponent"),
    },
    {
      text: "la",
      active: boolean("active3", false),
      onClick: action("NavigationPanelComponent"),
    },
  ],
};
