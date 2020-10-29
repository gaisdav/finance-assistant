import React from "react";
import Card, { IProps } from "./index";
import { text } from "@storybook/addon-knobs";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "Components/Card",
  component: Card,
};

const Template: Story<IProps> = (args) => {
  const content = text("Label", "hello");

  return <Card {...args}>{content}</Card>;
};

export const CardComponent = Template.bind({});
CardComponent.args = {
  className: "styles",
};
