import { TAppTheme } from "../../DomainModels/UserDM/interfaces";

export interface IUserVM {
  id: string;
  name: string;
  lastName: string;
  fullName: string;
  theme: TAppTheme;
}
