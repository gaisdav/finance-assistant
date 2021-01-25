import { openDB } from "idb";
import { IDBPDatabase } from "idb/build/esm/entry";
import { IDB } from "./interfaces";
import { AppSettingsDM } from "../../DomainModels/AppSettingsDM";
import { AmountDM } from "../../DomainModels/AmountDM";

class DBClient {
  db: IDBPDatabase<IDB> | null = null;
  private DBName: string = "Finance Assistant";

  async init() {
    this.db = await openDB<IDB>(this.DBName, 1, {
      upgrade: async (db, oldVersion, newVersion) => {
        if (newVersion) {
          if (oldVersion < 2) {
            const amountStore = await db.createObjectStore("amountStore");
            await amountStore.add(new AmountDM(), "amountStore");

            const appSettingsStore = await db.createObjectStore("appSettings");
            await appSettingsStore.add(new AppSettingsDM(), "appSettings");
          }
        }
      },
    });
  }
}

export default DBClient;
