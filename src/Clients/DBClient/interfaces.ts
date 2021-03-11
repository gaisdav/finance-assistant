import { DBSchema } from "idb";
import { IUserDM } from "../../DomainModels/UserDM/interfaces";

export interface IDB extends DBSchema {
  store: {
    key: TStoreNames;
    value: IUserDM | null;
  };
}

export type TStoreNames = "user";
