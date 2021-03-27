import { Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { IProps } from "./interfaces";
import RadioGroup from "./index";

export default {
  title: "Components/Inputs/RadioGroup",
  component: RadioGroup,
};

const TemplateRequire: Story<IProps> = (args) => {
  return (
    <RadioGroup
      errorText={args.errorText}
      groupName={args.groupName}
      radioButtons={args.radioButtons}
      labelText={args.labelText}
      onChange={args.onChange}
      require={args.require}
    />
  );
};

export const RadioGroupStory = TemplateRequire.bind({});
RadioGroupStory.args = {
  radioButtons: [
    {
      label: "Кнопка 1",
      value: "Кнопка 1",
      htmlFor: "Кнопка 1",
    },
    {
      label: "Кнопка 2",
      value: "Кнопка 2",
      htmlFor: "Кнопка 2",
    },
  ],
  labelText: "Название поля",
  groupName: "Название поля",
  errorText: "Текст ошибки",
  require: boolean("require", true),
  onChange: action("change"),
};
