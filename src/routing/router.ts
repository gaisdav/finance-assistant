import { createRouter } from "router5";
import { routes } from "./routes";

export const router = createRouter(routes, {
  allowNotFound: true,
  queryParamsMode: "loose",
  defaultRoute: "main",
  autoCleanUp: false,
});
