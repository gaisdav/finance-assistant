import { FC } from "react";
import { IUserVM } from "../../../ViewModels/UserVM/interfaces";
import { useRoute } from "react-router5";
import Content from "./components/Content/Content";
import EditForm from "./components/EditForm/EditForm";

export interface IProps {
  user: IUserVM;
}

const Profile: FC<IProps> = (user) => {
  const {
    route: { name: routeName },
  } = useRoute();

  if (routeName === "profile.edit") return <EditForm />;

  return <Content name="Гайсар Давлеткильдин" theme="Светлая" />;
};

export default Profile;
