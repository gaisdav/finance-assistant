import { makeAutoObservable } from "mobx";
import { IAppSettingsDM, TAppTheme } from "./interfaces";

export class AppSettingsDM implements IAppSettingsDM {
  theme: TAppTheme = "light";

  constructor() {
    makeAutoObservable(this);
  }
}
