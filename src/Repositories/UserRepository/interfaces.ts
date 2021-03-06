import { IUserDM } from "../../DomainModels/UserDM/interfaces";

export interface IUserRepository {
  getUser: () => Promise<IUserResponseDTO>;
}

export interface IUserResponseDTO extends IUserDM {}
