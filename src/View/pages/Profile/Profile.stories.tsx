import Profile, { IProps } from "./index";
import { Story, Meta } from "@storybook/react/types-6-0";
import { storage } from "../../../Storage/storage";

export default {
  title: "Pages/Profile",
  component: Profile,
} as Meta;

export const Page: Story<IProps> = (args) => {
  return <Profile user={args.user} />;
};

Page.args = {
  user: storage.user,
};
