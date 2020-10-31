import { IRoute } from "./interfaces";

export const routes: IRoute[] = [
  {
    name: "main",
    path: "/",
    onActivate: async (dependencies) => {
      console.log("onActivate", dependencies);
    },
  },
];
