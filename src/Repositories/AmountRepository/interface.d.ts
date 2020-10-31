export interface IAmountRepository {
  getAmount: () => Promise<number>;
  setAmount: (amount: number) => Promise<string>;
  deleteAmount: () => Promise<void>;
}
