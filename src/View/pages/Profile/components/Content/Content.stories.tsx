import { Story, Meta } from "@storybook/react/types-6-0";
import Content, { IProps } from "./Content";

export default {
  title: "Pages/Profile/Components",
  component: Content,
} as Meta;

export const ContentStory: Story<IProps> = (args) => {
  return <Content name={args.name} theme={args.theme} />;
};

ContentStory.args = {
  name: "Давлеткильдин Гайсар",
  theme: "Светлая",
};
