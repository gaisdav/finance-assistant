import { IAmountVM } from "../ViewModels/AmountVM/interfaces";
import { ICalendarVM } from "../View/pages/Main/interfaces";

export interface IStorage {
  amount: IAmountVM;
  calendar: ICalendarVM;
}
