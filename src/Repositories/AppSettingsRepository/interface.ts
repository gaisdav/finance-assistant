import { IAppSettingsDM } from "../../DomainModels/AppSettingsDM/interfaces";

export interface IAppSettingsRepository {
  getSettings: () => Promise<IAppSettingsDM | undefined>;
  setSettings: (param: keyof IAppSettingsDM, value: string) => Promise<string>;
}
