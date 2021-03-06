import AmountVM from "../ViewModels/AmountVM";
import CalendarVM from "../ViewModels/CalendarVM";
import AmountService from "../UseCases/AmountService";
import AmountRepository from "../Repositories/AmountRepository";
import DBClient from "../Clients/DBClient";
import { AmountDM } from "../DomainModels/AmountDM";
import { IStorage } from "./interfaces";
import { AppSettingsRepository } from "../Repositories/AppSettingsRepository";
import { CalendarDM } from "../DomainModels/CalendarDM";
import { UserDM } from "../DomainModels/UserDM";
import { UserRepository } from "../Repositories/UserRepository";
import { UserUseCase } from "../UseCases/UserUseCase";
import { UserVM } from "../ViewModels/UserVM";

// TODO rewrite to singleton ???

export const clients = {
  db: new DBClient(),
};

export const domainModels = {
  amount: new AmountDM(),
  calendar: new CalendarDM(),
  user: new UserDM(),
};

export const repositories = {
  amount: new AmountRepository(clients.db),
  settings: new AppSettingsRepository(clients.db),
  user: new UserRepository(),
};

export const useCases = {
  amount: new AmountService(repositories.amount),
  user: new UserUseCase(repositories.user),
};

export const storage: IStorage = {
  amount: new AmountVM(useCases.amount, domainModels.amount),
  calendar: new CalendarVM(domainModels.calendar),
  user: new UserVM(domainModels.user, useCases.user),
};
