import { StrictMode } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { configure } from "mobx";
import App from "./App";
import { RouterProvider } from "react-router5";
import router from "./Routing/router";
import { clients } from "./Storage/storage";

configure({ enforceActions: "observed" });

clients.db.init().then(() => {
  router.start(() => {
    ReactDOM.render(
      <StrictMode>
        {/*@ts-ignore*/}
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </StrictMode>,
      document.getElementById("root")
    );
  });
});

serviceWorker.register();
