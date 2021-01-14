import { DBSchema, deleteDB, openDB } from "idb";
import { IDBPDatabase, StoreKey, StoreValue } from "idb/build/esm/entry";

export interface IDB extends DBSchema {
  amountStore: {
    key: string;
    value: number;
  };
}

class DBClient {
  db: IDBPDatabase<IDB> | null = null;
  private DBName: string = "assistant";

  async init() {
    this.db = await openDB<IDB>(this.DBName, 1, {
      upgrade: async (db) => {
        db.createObjectStore("amountStore");
      },
    });
  }

  async get(key: string): Promise<StoreValue<IDB, "amountStore"> | null> {
    if (!this.db) {
      throw new Error("DB is not initialized");
    }

    return (await this.db.get("amountStore", key)) || null;
  }

  async set(key: string, val: any): Promise<StoreKey<IDB, "amountStore">> {
    if (!this.db) {
      throw new Error("DB is not initialized");
    }

    return this.db.put("amountStore", val, key);
  }

  async delete(key: string): Promise<void> {
    if (!this.db) {
      throw new Error("DB is not initialized");
    }

    return this.db.delete("amountStore", key);
  }

  async dismiss() {
    await deleteDB(this.DBName, {
      blocked() {},
    });
  }
}

export default DBClient;
