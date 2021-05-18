import { FC } from "react";
import Card from "../../../../common/components/Card";
import Input from "../../../../common/components/Input";
import RadioGroup from "../../../../common/components/RadioGroup";
import styles from "../../styles.module.scss";
import Button from "../../../../common/components/Button";
import { useRouter } from "react-router5";

const EditForm: FC = () => {
  const { navigate } = useRouter();

  const { row } = styles;

  return (
    <form>
      <Card className={row}>
        <Input
          className={row}
          htmlFor="name"
          labelText="Имя"
          onChange={() => {}}
          require={true}
        />

        <Input
          className={row}
          htmlFor="lastname"
          labelText="Фамилия"
          onChange={() => {}}
        />
      </Card>

      <Card className={row}>
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
      </Card>

      <Button type="error" onClick={() => navigate("profile")}>
        Отмена
      </Button>
      <Button type="success" onClick={() => navigate("profile")}>
        Сохранить
      </Button>
    </form>
  );
};

export default EditForm;
