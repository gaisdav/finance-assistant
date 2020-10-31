import { IBaseVM } from "../interfase";

export interface IAmountVM extends IBaseVM {
  totalLimit: number;
  getAmount: () => Promise<void>;
  setAmount: (amount: number) => Promise<string>;
  deleteAmount: () => Promise<void>;
}
