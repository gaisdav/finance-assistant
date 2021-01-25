import DBClient from "../../Clients/DBClient";
import { IAmountRepository } from "./interface";
import { IAmountDM } from "../../DomainModels/AmountDM/interfaces";

class AmountRepository implements IAmountRepository {
  constructor(private dbClient: DBClient) {}

  async getAmount(): Promise<IAmountDM> {
    if (!this.dbClient.db) {
      throw new Error("DB is not initialized");
    }

    const amountStore = await this.dbClient.db.get(
      "amountStore",
      "amountStore"
    );

    if (!amountStore) {
      throw new Error("amountStore is not initialized");
    }

    return amountStore;
  }

  async setAmount(structure: IAmountDM): Promise<string> {
    if (!this.dbClient.db) {
      throw new Error("DB is not initialized");
    }

    return await this.dbClient.db.put("amountStore", structure, "amountStore");
  }
}

export default AmountRepository;
