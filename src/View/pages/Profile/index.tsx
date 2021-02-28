import { FC } from "react";
import Card from "../../common/components/Card";
import Subtitle from "../../common/components/Subtitle";

export interface IProps {
  name: string;
}

const Profile: FC<IProps> = ({ name }) => {
  return (
    <Card>
      <Subtitle>{name}</Subtitle>
    </Card>
  );
};

export default Profile;
