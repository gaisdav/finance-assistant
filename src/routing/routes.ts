import { IRoute } from "./interfaces";
import { IStorage } from "../storage/interfaces";

export const routes: IRoute<IStorage>[] = [
  {
    name: "main",
    path: "/",
    onActivate: async (dependencies: IStorage) => {
      dependencies.amount.getAmount();
    },
  },
];
