import {
  IAppSettingsDM,
  TAppTheme,
} from "../../DomainModels/AppSettingsDM/interfaces";
import { BaseVM } from "../BaseVM";
import { IAppSettingsVM } from "./interface";

export class AppSettingsVM extends BaseVM implements IAppSettingsVM {
  get theme(): TAppTheme {
    return this.domainModel.theme;
  }

  constructor(private domainModel: IAppSettingsDM) {
    super();
  }
}
