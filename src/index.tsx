import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { configure } from "mobx";
import App from "./App";
import { RouterProvider } from "react-router5";
import router from "./routing/router";
import { clients } from "./storage/storage";

configure({ enforceActions: "observed" });

// router.setDependencies(storage);

clients.db.init().then(() => {
  router.start(() => {
    ReactDOM.render(
      <React.StrictMode>
        {/*@ts-ignore*/}
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </React.StrictMode>,
      document.getElementById("root")
    );
  });
});

serviceWorker.register();
