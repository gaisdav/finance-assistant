import { FC } from "react";
import Card from "../../../common/components/Card";
import Input from "../../../common/components/Input";
import RadioGroup from "../../../common/components/RadioGroup";
import styles from "../styles.module.scss";

const EditForm: FC = () => {
  const { row } = styles;

  return (
    <Card>
      <form>
        <div className={row}>
          <Input
            htmlFor="name"
            labelText="Имя"
            onChange={() => {}}
            require={true}
          />
        </div>

        <div className={row}>
          <Input htmlFor="lastname" labelText="Фамилия" onChange={() => {}} />
        </div>

        <div className={row}>
          <RadioGroup
            radioButtons={[
              {
                label: "Светлая",
                value: "light",
                htmlFor: "light",
              },
              {
                label: "Темная",
                value: "dark",
                htmlFor: "dark",
              },
            ]}
            labelText="Выберите тему"
            groupName="theme"
            require={true}
            onChange={() => {}}
          />
        </div>
      </form>
    </Card>
  );
};

export default EditForm;
