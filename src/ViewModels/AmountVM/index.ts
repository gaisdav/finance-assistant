import { BaseVM } from "../BaseVM";
import { IAmountDM } from "../../DomainModels/AmountDM/interfaces";
import { IAmountVM } from "./interfaces";
import { IAmountService } from "../../UseCases/AmountService/interfaces";
import { runInAction } from "mobx";

class AmountVM extends BaseVM implements IAmountVM {
  get totalLimit(): string {
    const totalLimit = this.domainModel.totalLimit;

    return totalLimit ? `${totalLimit} руб.` : "не указан";
  }

  constructor(private service: IAmountService, private domainModel: IAmountDM) {
    super();
  }

  async getAmount(): Promise<void> {
    this.setLoading();

    await runInAction(async () => {
      this.domainModel = await this.service.getAmount("totalLimit");
    });

    this.unsetLoading();
  }

  async setAmount(amount: number): Promise<IAmountDM> {
    const structure = {};
    return await this.service.setAmount(structure, this.domainModel);
  }
}

export default AmountVM;
