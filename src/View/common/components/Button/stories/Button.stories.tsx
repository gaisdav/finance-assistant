import { Story } from "@storybook/react/types-6-0";
import { IProps } from "../interfaces";
import Button from "../index";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Buttons/Button",
  component: Button,
};

const MainTemplate: Story<IProps> = (args) => {
  return <Button {...args}>args.children</Button>;
};

export const MainButtonComponent = MainTemplate.bind({
  className: "",
  type: "base",
  variant: "outlined",
  size: "default",
  loading: false,
  onClick: action("onClick"),
  children: "Button",
});

export const BaseButtons: Story<IProps> = () => {
  return (
    <>
      <Button>base</Button>

      <Button variant="outlined">base outlined</Button>

      <Button variant="filled">base filled</Button>

      <h3>size</h3>

      <Button variant="outlined" size="small">
        base outlined small
      </Button>

      <Button variant="outlined" size="large">
        base outlined large
      </Button>

      <Button variant="filled" size="small">
        base filled small
      </Button>

      <Button variant="filled" size="large">
        base filled large
      </Button>
    </>
  );
};

export const ErrorButtons: Story<IProps> = () => {
  return (
    <>
      <Button type="error">error</Button>
      <Button type="error" variant="outlined">
        error outlined
      </Button>
      <Button type="error" variant="filled">
        error filled
      </Button>

      <h3>size</h3>

      <Button type="error" variant="outlined" size="small">
        error outlined small
      </Button>

      <Button type="error" variant="outlined" size="large">
        error outlined large
      </Button>

      <Button type="error" variant="filled" size="small">
        error filled small
      </Button>

      <Button type="error" variant="filled" size="large">
        error filled large
      </Button>
    </>
  );
};

export const SuccessButtons: Story<IProps> = () => {
  return (
    <>
      <Button type="success">success</Button>

      <Button type="success" variant="outlined">
        success outlined
      </Button>

      <Button type="success" variant="filled">
        success filled
      </Button>

      <h3>size</h3>

      <Button type="success" variant="outlined" size="small">
        error outlined small
      </Button>

      <Button type="success" variant="outlined" size="large">
        error outlined large
      </Button>

      <Button type="success" variant="filled" size="small">
        error filled small
      </Button>

      <Button type="success" variant="filled" size="large">
        error filled large
      </Button>
    </>
  );
};

export const MainButtons: Story<IProps> = () => {
  return (
    <>
      <Button type="main">main</Button>
      <Button type="main" variant="filled">
        main filled
      </Button>
      <Button type="main" variant="outlined">
        main outlined
      </Button>

      <h3>size</h3>

      <Button type="main" variant="outlined" size="small">
        error outlined small
      </Button>

      <Button type="main" variant="outlined" size="large">
        error outlined large
      </Button>

      <Button type="main" variant="filled" size="small">
        error filled small
      </Button>

      <Button type="main" variant="filled" size="large">
        error filled large
      </Button>
    </>
  );
};

export const SecondaryButtons: Story<IProps> = () => {
  return (
    <>
      <Button type="secondary">secondary</Button>
      <Button type="secondary" variant="filled">
        secondary filled
      </Button>
      <Button type="secondary" variant="outlined">
        secondary outlined
      </Button>

      <h3>size</h3>

      <Button type="secondary" variant="outlined" size="small">
        error outlined small
      </Button>

      <Button type="secondary" variant="outlined" size="large">
        error outlined large
      </Button>

      <Button type="secondary" variant="filled" size="small">
        error filled small
      </Button>

      <Button type="secondary" variant="filled" size="large">
        error filled large
      </Button>
    </>
  );
};
