class AmountVM implements IAmountVM {
  constructor(private service: IAmountService) {}

  async getAmount(): Promise<number> {
    return await this.service.getAmount();
  }

  async setAmount(amount: number): Promise<string> {
    return await this.service.setAmount(amount);
  }

  async deleteAmount(): Promise<void> {
    return this.service.deleteAmount();
  }
}

export default AmountVM;
