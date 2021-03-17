import { Story } from "@storybook/react/types-6-0";
import IconButton, { IProps } from "./index";
import { action } from "@storybook/addon-actions";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";

export default {
  title: "Buttons/IconButton",
  component: IconButton,
};

const Template: Story<IProps> = (args) => {
  return (
    <IconButton onClick={args.onClick} className={args.className}>
      <EditIcon />
    </IconButton>
  );
};

export const IconButtonComponent = Template.bind({});
IconButtonComponent.args = {
  className: "className",
  onClick: action("click"),
};
