import { createRouter } from "router5";
import { routes } from "./routes";
import { onActivateMiddlewareFactory } from "./middleware";

const router = createRouter(routes, {
  allowNotFound: true,
  queryParamsMode: "loose",
  defaultRoute: "main",
  autoCleanUp: false,
});

router.useMiddleware(onActivateMiddlewareFactory(routes));

export default router;
