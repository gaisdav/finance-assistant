import { createRouter } from "router5";
import browserPlugin from "router5-plugin-browser";
import { routes } from "./routes";
import { onActivateMiddlewareFactory } from "./middleware";
import { IStorage } from "../Storage/interfaces";
import { storage } from "../Storage/storage";

const router = createRouter<IStorage>(
  routes,
  {
    allowNotFound: true,
    queryParamsMode: "loose",
    autoCleanUp: false,
  },
  storage
);

router.usePlugin(
  browserPlugin({
    forceDeactivate: false,
  })
);

router.useMiddleware(onActivateMiddlewareFactory(routes));

export default router;
