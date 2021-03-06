import { IAmountService } from "./interfaces";
import { IAmountRepository } from "../../Repositories/AmountRepository/interface";
import { IAmountDM } from "../../DomainModels/AmountDM/interfaces";

class AmountService implements IAmountService {
  constructor(private repository: IAmountRepository) {}

  async getAmount(amountType: keyof IAmountDM): Promise<IAmountDM> {
    return await this.repository.getAmount(amountType);
  }

  async setAmount(
    params: Partial<IAmountDM>,
    dm: IAmountDM
  ): Promise<IAmountDM> {
    const newStructure = {
      ...dm,
      ...params,
    };
    await this.repository.setAmount(newStructure);

    return newStructure;
  }
}

export default AmountService;
