import { openDB } from "idb";
import { IDBPDatabase } from "idb/build/esm/entry";
import { IDB } from "./interfaces";

class DBClient {
  db: IDBPDatabase<IDB> | null = null;
  private DBName: string = "Finance Assistant";

  async init() {
    this.db = await openDB<IDB>(this.DBName, 1, {
      upgrade: async (db) => {
        const store = await db.createObjectStore("store");
        store.add(null, "user");
      },
    });
  }
}

export default DBClient;
