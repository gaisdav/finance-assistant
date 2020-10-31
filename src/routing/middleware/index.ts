import { MiddlewareFactory } from "router5/dist/types/router";
import { IRoute } from "../interfaces";

export const onActivateMiddlewareFactory = (
  routes: IRoute[]
): MiddlewareFactory => (router) => (toState): boolean => {
  const route = routes.find((route) => route.name === toState.name);
  route?.onActivate(router.getDependencies());

  return true;
};
