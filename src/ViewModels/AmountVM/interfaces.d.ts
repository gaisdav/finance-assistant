import { IBaseVM } from "../interfase";
import { IAmountDM } from "../../DomainModels/AmountDM/interfaces";

export interface IAmountVM extends IBaseVM {
  totalLimit: string;
  getAmount: () => Promise<void>;
  setAmount: (amount: number) => Promise<IAmountDM>;
}
