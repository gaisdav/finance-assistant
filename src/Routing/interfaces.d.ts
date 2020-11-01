import { Route } from "router5";

export interface IRoute<I> extends Route<I> {
  onActivate: (dependencies: Dependencies) => Promise<void>;
}
