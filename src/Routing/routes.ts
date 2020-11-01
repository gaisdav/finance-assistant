import { IRoute } from "./interfaces";
import { IStorage } from "../Storage/interfaces";

export const routes: IRoute<IStorage>[] = [
  {
    name: "main",
    path: "/",
    onActivate: async (dependencies: IStorage) => {
      dependencies.amount.getAmount();
    },
  },
];
