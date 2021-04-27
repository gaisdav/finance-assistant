import { Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import Input from "./index";
import { boolean } from "@storybook/addon-knobs";
import { IProps } from "./interfaces";

export default {
  title: "Components/Inputs/Input",
  component: Input,
};

const TemplateRequire: Story<IProps> = (args) => {
  return (
    <Input
      htmlFor="input"
      labelText={args.labelText}
      onChange={args.onChange}
      value={args.value}
      require={args.require}
      errorText={args.errorText}
      placeholder={args.placeholder}
    />
  );
};

export const InputStory = TemplateRequire.bind({});
InputStory.args = {
  labelText: "Название поля",
  errorText: "Текст ошибки",
  value: "123",
  placeholder: "test",
  require: boolean("require", true),
  onChange: action("change"),
};
