import { IUserDM, TAppTheme } from "./interfaces";
import { makeAutoObservable } from "mobx";

export class UserDM implements IUserDM {
  id: string;
  lastName: string;
  name: string;
  theme: TAppTheme;

  constructor() {
    this.id = "";
    this.lastName = "";
    this.name = "";
    this.theme = "light";

    makeAutoObservable(this);
  }
}
