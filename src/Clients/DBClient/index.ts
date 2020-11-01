import { DBSchema, deleteDB, openDB } from "idb";
import { IDBPDatabase, StoreKey, StoreValue } from "idb/build/esm/entry";

interface IDB extends DBSchema {
  assistantStore: {
    key: string;
    value: number;
  };
}

class DBClient {
  private db: IDBPDatabase<IDB> | null = null;
  private DBName: string = "assistant";

  async init() {
    this.db = await openDB<IDB>(this.DBName, 1, {
      upgrade: async (db) => {
        const store = db.createObjectStore("assistantStore");
        await store.put(0, "amount");
      },
    });
  }

  async get(key: string): Promise<StoreValue<IDB, "assistantStore">> {
    if (!this.db) {
      throw new Error("DB is not initialized");
    }

    const value = await this.db.get("assistantStore", key);

    console.log(value);

    if (value === void 0 || value === null) {
      throw new Error("Еhe requested field was not found");
    }

    return value || 0;
  }

  async set(key: string, val: any): Promise<StoreKey<IDB, "assistantStore">> {
    if (!this.db) {
      throw new Error("DB is not initialized");
    }

    return this.db.put<"assistantStore">("assistantStore", val, key);
  }

  async delete(key: string): Promise<void> {
    if (!this.db) {
      throw new Error("DB is not initialized");
    }

    return this.db.delete<"assistantStore">("assistantStore", key);
  }

  async dismiss() {
    await deleteDB(this.DBName, {
      blocked() {},
    });
  }
}

export default DBClient;
