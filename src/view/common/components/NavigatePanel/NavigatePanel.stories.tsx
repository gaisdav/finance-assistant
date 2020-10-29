import React from "react";
import { INavigatePanelProps } from "./index";
import { Story } from "@storybook/react/types-6-0";
import NavigatePanel from "./index";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";

export default {
  title: "Components/NavigatePanel",
  component: NavigatePanel,
};

const Template: Story<INavigatePanelProps> = (args) => (
  <NavigatePanel {...args} />
);

export const NavigatePanelComponent = Template.bind({});
NavigatePanelComponent.args = {
  buttons: [
    {
      text: "label",
      active: boolean("active", true),
      onClick: action("NavigatePanelComponent"),
    },
    {
      text: "labelasd",
      active: boolean("active2", false),
      onClick: action("NavigatePanelComponent"),
    },
    {
      text: "la",
      active: boolean("active3", false),
      onClick: action("NavigatePanelComponent"),
    },
  ],
};
