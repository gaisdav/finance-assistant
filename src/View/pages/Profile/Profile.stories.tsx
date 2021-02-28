import Profile, { IProps } from "./index";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Pages/Profile",
  component: Profile,
} as Meta;

export const ExampleStory: Story<IProps> = (args) => {
  const { name } = args;

  return <Profile name={name} />;
};

ExampleStory.args = {
  name: "Гайсар Давлеткильдин",
};
