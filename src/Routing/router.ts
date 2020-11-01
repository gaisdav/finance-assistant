import { createRouter } from "router5";
import { routes } from "./routes";
import { onActivateMiddlewareFactory } from "./middleware";
import { IStorage } from "../Storage/interfaces";
import { storage } from "../Storage/storage";

const router = createRouter<IStorage>(
  routes,
  {
    allowNotFound: true,
    queryParamsMode: "loose",
    defaultRoute: "main",
    autoCleanUp: false,
  },
  storage
);

router.useMiddleware(onActivateMiddlewareFactory(routes));

export default router;
