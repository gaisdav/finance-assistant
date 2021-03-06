import DBClient from "../../Clients/DBClient";
import { IAppSettingsRepository } from "./interface";
import { IAppSettingsDM } from "../../DomainModels/AppSettingsDM/interfaces";

export class AppSettingsRepository implements IAppSettingsRepository {
  constructor(private dbClient: DBClient) {}

  async getSettings(): Promise<IAppSettingsDM | undefined> {
    if (!this.dbClient.db) {
      throw new Error("DB is not initialized");
    }

    return new Promise(() => void 0);
  }

  async setSettings(
    params: keyof IAppSettingsDM,
    value: string
  ): Promise<string> {
    if (!this.dbClient.db) {
      throw new Error("DB is not initialized");
    }

    return Promise.resolve("");
  }
}
