import { IAmountDM } from "../../DomainModels/AmountDM/interfaces";

export interface IAmountRepository {
  getAmount: (amountType: keyof IAmountDM) => Promise<number | null>;
  setAmount: (amountType: keyof IAmountDM, amount: number) => Promise<string>;
  deleteAmount: (amountType: keyof IAmountDM) => Promise<void>;
}
