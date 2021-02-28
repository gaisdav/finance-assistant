import { FC } from "react";
import Card from "../../common/components/Card";
import Subtitle from "../../common/components/Subtitle";

const Profile: FC = () => {
  return (
    <Card>
      <Subtitle>Имя</Subtitle>
      <input type="text" placeholder="Введите имя" />
      <Subtitle>Фамилия</Subtitle>
      <input type="text" placeholder="Введите фамилию" />
    </Card>
  );
};

export default Profile;
