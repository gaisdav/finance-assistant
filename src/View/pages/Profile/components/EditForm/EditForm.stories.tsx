import { Story, Meta } from "@storybook/react/types-6-0";
import EditForm from "./EditForm";

export default {
  title: "Pages/Profile/Components",
  component: EditForm,
} as Meta;

export const EditFormStory: Story = (args) => {
  return <EditForm />;
};
