import { IAmountVM } from "../ViewModels/AmountVM/interfaces";
import { ICalendarVM } from "../View/pages/Calendar/interfaces";
import { IUserVM } from "../ViewModels/UserVM/interfaces";

export interface IStorage {
  amount: IAmountVM;
  calendar: ICalendarVM;
  user: IUserVM;
}
