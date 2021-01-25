import { DBSchema } from "idb";
import { IAmountDM } from "../../DomainModels/AmountDM/interfaces";
import { IAppSettingsDM } from "../../DomainModels/AppSettingsDM/interfaces";

export interface IDB extends DBSchema {
  amountStore: {
    key: TStoreNames;
    value: IAmountDM;
  };
  appSettings: {
    key: TStoreNames;
    value: IAppSettingsDM;
  };
}

export type TStoreNames = keyof Pick<IDB, "amountStore" | "appSettings">;
