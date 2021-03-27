import { MiddlewareFactory } from "router5/dist/types/router";
import { IRoute } from "../interfaces";
import { IStorage } from "../../Storage/interfaces";

export const onActivateMiddlewareFactory = (
  routes: IRoute<IStorage>[]
): MiddlewareFactory<IStorage> => (router) => (toState): boolean => {
  const route = routes.find((route) => route.name === toState.name);
  route?.onActivate && route?.onActivate(router.getDependencies());

  return true;
};
