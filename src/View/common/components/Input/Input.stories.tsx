import { Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import Input from "./index";
import { boolean } from "@storybook/addon-knobs";
import { IProps } from "./interfaces";

export default {
  title: "Inputs/Input",
  component: Input,
};

const TemplateRequire: Story<IProps> = (args) => {
  return (
    <Input
      labelText={args.labelText}
      onChange={args.onChange}
      value={args.value}
      require={args.require}
      errorText={args.errorText}
    />
  );
};

export const RequireInputComponent = TemplateRequire.bind({});
RequireInputComponent.args = {
  labelText: "Название поля",
  errorText: "Текст ошибки",
  value: "123",
  require: boolean("require", true),
  onChange: action("change"),
};
