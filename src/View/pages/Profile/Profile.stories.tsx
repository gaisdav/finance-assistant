import Profile, { IProps } from "./index";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Pages/Profile",
  component: Profile,
} as Meta;

export const Example: Story<IProps> = (args) => {
  const { name, theme } = args;

  return <Profile name={name} theme={theme} />;
};

Example.args = {
  name: "Давлеткильдин Гайсар",
  theme: "Светлая",
};
