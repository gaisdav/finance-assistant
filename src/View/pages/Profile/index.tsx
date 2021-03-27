import { FC } from "react";
import EditForm from "./components/EditForm/EditForm";
import { IUserVM } from "../../../ViewModels/UserVM/interfaces";

export interface IProps {
  user: IUserVM;
}

const Profile: FC<IProps> = (user) => {
  // return <Content name="Гайсар Давлеткильдин" theme="Светлая" />;
  return <EditForm />;
};

export default Profile;
