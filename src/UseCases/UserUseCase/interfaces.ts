import { IUserDM } from "../../DomainModels/UserDM/interfaces";

export interface IUserUseCase {
  getUser: () => Promise<IUserDM>;
}
