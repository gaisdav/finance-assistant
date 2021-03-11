import DBClient from "../../Clients/DBClient";
import { IAmountRepository } from "./interface";
import { IAmountDM } from "../../DomainModels/AmountDM/interfaces";

class AmountRepository implements IAmountRepository {
  constructor(private dbClient: DBClient) {}

  async getAmount(): Promise<IAmountDM> {
    // if (!this.dbClient.db) {
    //   throw new Error("DB is not initialized");
    // }
    //
    // const amountStore = await this.dbClient.db.get(
    //   "amountStore",
    //   "amountStore"
    // );
    //
    // if (!amountStore) {
    //   throw new Error("amountStore is not initialized");
    // }

    return {
      totalLimit: 0,
    };
  }

  async setAmount(structure: IAmountDM): Promise<string> {
    if (!this.dbClient.db) {
      throw new Error("DB is not initialized");
    }

    return new Promise(() => "done");
  }
}

export default AmountRepository;
