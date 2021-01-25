import { IAmountDM } from "../../DomainModels/AmountDM/interfaces";

export interface IAmountRepository {
  getAmount: (amountType: keyof IAmountDM) => Promise<IAmountDM>;
  setAmount: (structure: IAmountDM) => Promise<string>;
  // deleteAmount: (amountType: keyof IAmountDM) => Promise<void>;
}
