import { IAmountDM } from "./interfaces";
import { makeAutoObservable, observable } from "mobx";

export class AmountDM implements IAmountDM {
  @observable
  totalLimit: number = 0;
  @observable
  dayLimit: number = 0;

  constructor() {
    makeAutoObservable(this);
  }
}
