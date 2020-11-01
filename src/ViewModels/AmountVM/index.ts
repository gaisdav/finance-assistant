import { BaseVM } from "../BaseVM";
import { IAmountDM } from "../../DomainModels/AmountDM/interfaces";
import { IAmountVM } from "./interfaces";
import { IAmountService } from "../../Services/AmountService/interfaces";
import { runInAction } from "mobx";

class AmountVM extends BaseVM implements IAmountVM {
  get totalLimit(): number {
    return this.domainModel.totalLimit;
  }

  constructor(private service: IAmountService, private domainModel: IAmountDM) {
    super();
  }

  async getAmount(): Promise<void> {
    this.setLoading();

    await runInAction(async () => {
      this.domainModel.totalLimit = await this.service.getAmount();
    });

    this.unsetLoading();
  }

  async setAmount(amount: number): Promise<string> {
    return await this.service.setAmount(amount);
  }

  async deleteAmount(): Promise<void> {
    return this.service.deleteAmount();
  }
}

export default AmountVM;
