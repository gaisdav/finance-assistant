import { IUserUseCase } from "./interfaces";
import { IUserDM } from "../../DomainModels/UserDM/interfaces";
import { IUserRepository } from "../../Repositories/UserRepository/interfaces";

export class UserUseCase implements IUserUseCase {
  constructor(private repository: IUserRepository) {}

  async getUser(): Promise<IUserDM> {
    const user = await this.repository.getUser();

    return {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      theme: user.theme,
    };
  }
}
