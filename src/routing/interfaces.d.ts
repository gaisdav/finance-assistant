import { Route } from "router5";

export interface IRoute extends Route {
  onActivate: (dependencies: Dependencies) => Promise<void>;
}
