import Subtitle from "./index";
import { Story } from "@storybook/react/types-6-0";
import { text } from "@storybook/addon-knobs";
import React from "react";

export default {
  title: "Typography/Subtitle",
  component: Subtitle,
};

const Template: Story = (args) => {
  const content = text("Label", "Subtitle");

  return <Subtitle {...args}>{content}</Subtitle>;
};

export const SubtitleComponent = Template.bind({});
SubtitleComponent.args = {};
