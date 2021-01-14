import DBClient from "../../Clients/DBClient";
import { IAmountRepository } from "./interface";
import { IAmountDM } from "../../DomainModels/AmountDM/interfaces";

class AmountRepository implements IAmountRepository {
  constructor(private dbClient: DBClient) {}

  async getAmount(amountType: keyof IAmountDM): Promise<number | null> {
    return await this.dbClient.get(amountType);
  }

  async setAmount(
    amountType: keyof IAmountDM,
    amount: number
  ): Promise<string> {
    return await this.dbClient.set(amountType, amount);
  }

  async deleteAmount(amountType: keyof IAmountDM): Promise<void> {
    await this.dbClient.delete(amountType);
  }
}

export default AmountRepository;
