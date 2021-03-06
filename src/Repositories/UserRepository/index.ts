import { IUserRepository, IUserResponseDTO } from "./interfaces";

export class UserRepository implements IUserRepository {
  async getUser(): Promise<IUserResponseDTO> {
    return {
      id: "2e5b1f2d-4805-4d2d-85e6-8ac0d921b129",
      name: "Гайсар",
      lastName: "Давлеткильдин",
      theme: "dark",
    };
  }
}
