import { deleteDB, openDB } from "idb";
import { IDBPDatabase, StoreKey, StoreValue } from "idb/build/esm/entry";
import { IDB, IDBClientStoragesConfig, TStoreNames } from "./interfaces";

class DBClient {
  db: IDBPDatabase<IDB> | null = null;
  private DBName: string = "Finance Assistant";

  constructor(private configs: IDBClientStoragesConfig[]) {}

  async init() {
    this.db = await openDB<IDB>(this.DBName, 1, {
      upgrade: async (db) => {
        this.configs.forEach((storage) => {
          db.createObjectStore(storage.storageName);
        });
      },
    });
  }

  async get(
    storeName: TStoreNames,
    key: string
  ): Promise<StoreValue<IDB, TStoreNames> | null> {
    if (!this.db) {
      throw new Error("DB is not initialized");
    }

    return (await this.db.get(storeName, key)) || null;
  }

  async set(
    storeName: TStoreNames,
    key: string,
    val: any
  ): Promise<StoreKey<IDB, TStoreNames>> {
    if (!this.db) {
      throw new Error("DB is not initialized");
    }

    return this.db.put(storeName, val, key);
  }

  async delete(storeName: TStoreNames, key: string): Promise<void> {
    if (!this.db) {
      throw new Error("DB is not initialized");
    }

    await this.db.delete(storeName, key);
  }

  async dismiss() {
    await deleteDB(this.DBName, {
      blocked() {},
    });
  }
}

export default DBClient;
