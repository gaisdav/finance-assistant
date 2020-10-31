import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { configure } from "mobx";
import DBClient from "./Clients/DBClient";
import App from "./App";
import { RouterProvider } from "react-router5";
import router from "./routing/router";

configure({ enforceActions: "observed" });

const dbClient: DBClient = new DBClient();

dbClient.init().then(() => {
  router.start(() => {
    ReactDOM.render(
      <React.StrictMode>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </React.StrictMode>,
      document.getElementById("root")
    );
  });
});

serviceWorker.register();
