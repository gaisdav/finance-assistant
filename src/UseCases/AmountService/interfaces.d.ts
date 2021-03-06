import { IAmountDM } from "../../DomainModels/AmountDM/interfaces";

export interface IAmountService {
  getAmount: (amountType: keyof IAmountDM) => Promise<IAmountDM>;
  setAmount: (params: Partial<IAmountDM>, dm: IAmountDM) => Promise<IAmountDM>;
}
