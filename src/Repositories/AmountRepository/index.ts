import DBClient from "../../Modules/DBClient";

class AmountRepository implements IAmountRepository {
  constructor(private dbClient: DBClient) {}

  async getAmount(): Promise<number> {
    return await this.dbClient.get("amount");
  }

  async setAmount(amount: number): Promise<string> {
    return await this.dbClient.set("amount", amount);
  }

  async deleteAmount(): Promise<void> {
    await this.dbClient.set("amount", 0);
  }
}

export default AmountRepository;
