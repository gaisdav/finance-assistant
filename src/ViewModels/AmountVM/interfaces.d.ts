interface IAmountVM {
  getAmount: () => Promise<number>;
  setAmount: (amount: number) => Promise<string>;
  deleteAmount: () => Promise<void>;
}
