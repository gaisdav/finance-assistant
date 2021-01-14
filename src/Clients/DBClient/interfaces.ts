import { DBSchema } from "idb";

export interface IDB extends DBSchema {
  amountStore: {
    key: string;
    value: number;
  };
}

export type TStoreNames = keyof Pick<IDB, "amountStore">;

export interface IDBClientStoragesConfig {
  storageName: TStoreNames;
  defaultValues?: [
    {
      [key: string]: any;
    }
  ];
}
