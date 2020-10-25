class AmountService implements IAmountService {
  constructor(private repository: IAmountRepository) {}

  async getAmount(): Promise<number> {
    return await this.repository.getAmount();
  }

  async setAmount(amount: number): Promise<string> {
    return await this.repository.setAmount(amount);
  }

  async deleteAmount(): Promise<void> {
    return await this.repository.deleteAmount();
  }
}

export default AmountService;
