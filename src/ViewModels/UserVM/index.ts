import { IUserVM } from "./interfaces";
import { TAppTheme, IUserDM } from "../../DomainModels/UserDM/interfaces";
import { BaseVM } from "../BaseVM";
import { IUserUseCase } from "../../UseCases/UserUseCase/interfaces";

export class UserVM extends BaseVM implements IUserVM {
  get id(): string {
    return this.userDm.id;
  }

  get fullName(): string {
    return `${this.name} ${this.lastName}`.trim();
  }

  get name(): string {
    return this.userDm.name;
  }

  get lastName(): string {
    return this.userDm.lastName;
  }

  get theme(): TAppTheme {
    return this.userDm.theme;
  }

  constructor(private userDm: IUserDM, private useCase: IUserUseCase) {
    super();
  }

  async getUser(): Promise<void> {
    this.setLoading();

    await this.useCase.getUser();

    this.unsetLoading();
  }
}
