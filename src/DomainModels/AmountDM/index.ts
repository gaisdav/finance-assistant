import { IAmountDM } from "./interfaces";
import { makeAutoObservable } from "mobx";

export class AmountDM implements IAmountDM {
  totalLimit: number = 0;

  constructor() {
    makeAutoObservable(this);
  }
}
