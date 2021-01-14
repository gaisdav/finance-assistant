import { IBaseVM } from "../interfase";

export interface IAmountVM extends IBaseVM {
  totalLimit: string;
  getAmount: () => Promise<void>;
  setAmount: (amount: number) => Promise<string>;
  deleteAmount: () => Promise<void>;
}
