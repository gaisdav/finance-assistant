import { FC } from "react";
import Card from "../../../common/components/Card";
import Input from "../../../common/components/Input";

const EditForm: FC = () => {
  return (
    <Card>
      <form>
        <div>
          <Input
            htmlFor="name"
            labelText="Имя"
            onChange={() => {}}
            value="2123"
            require={true}
          />
        </div>

        <div>
          <Input
            htmlFor="lastname"
            labelText="Фамилия"
            onChange={() => {}}
            value=""
            require={true}
          />
        </div>

        <div>
          <Input
            htmlFor="theme"
            labelText="Тема"
            onChange={() => {}}
            value=""
            require={true}
          />
        </div>
      </form>
    </Card>
  );
};

export default EditForm;
