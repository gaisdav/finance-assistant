import AmountVM from "../ViewModels/AmountVM";
import CalendarVM from "../ViewModels/CalendarVM";
import AmountService from "../Services/AmountService";
import AmountRepository from "../Repositories/AmountRepository";
import DBClient from "../Clients/DBClient";
import { AmountDM } from "../DomainModels/AmountDM";
import { IStorage } from "./interfaces";

export const clients = {
  db: new DBClient(),
};

export const domainModels = {
  amount: new AmountDM(),
};

export const repositories = {
  amount: new AmountRepository(clients.db),
};

export const services = {
  amount: new AmountService(repositories.amount),
};

export const storage: IStorage = {
  amount: new AmountVM(services.amount, domainModels.amount),
  calendar: new CalendarVM(),
};
