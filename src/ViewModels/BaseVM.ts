import { action, observable } from "mobx";
import { IBaseVM } from "./interfase";

export class BaseVM implements IBaseVM {
  @observable
  loading: boolean = false;

  @action
  setLoading = () => {
    this.loading = true;
  };

  @action
  unsetLoading = () => {
    this.loading = false;
  };
}
