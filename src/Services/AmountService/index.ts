import { IAmountService } from "./interfaces";
import { IAmountRepository } from "../../Repositories/AmountRepository/interface";
import { IAmountDM } from "../../DomainModels/AmountDM/interfaces";

class AmountService implements IAmountService {
  constructor(private repository: IAmountRepository) {}

  async getAmount(amountType: keyof IAmountDM): Promise<number | null> {
    return await this.repository.getAmount(amountType);
  }

  async setAmount(
    amountType: keyof IAmountDM,
    amount: number
  ): Promise<string> {
    return await this.repository.setAmount(amountType, amount);
  }

  async deleteAmount(amountType: keyof IAmountDM): Promise<void> {
    return await this.repository.deleteAmount(amountType);
  }
}

export default AmountService;
