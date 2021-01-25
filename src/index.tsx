import { StrictMode } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { configure } from "mobx";
import App from "./App";
import { RouterProvider } from "react-router5";
import router from "./Routing/router";
import { clients, repositories } from "./Storage/storage";
import "./index.scss";

configure({ enforceActions: "observed" });

const bodyEl = document.querySelector("body");
const statusBarMetaTag = document.querySelector('meta[name="theme-color"]');

bodyEl?.setAttribute("data-theme", "light");

const bodyBg = getComputedStyle(document.body).getPropertyValue("--body-bg");
statusBarMetaTag?.setAttribute("content", bodyBg);

clients.db
  .init()
  .then(() => {
    repositories.settings.getSettings();

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
  })
  .catch((err: Error) => {
    ReactDOM.render(
      <div>
        Ошибка: {err.name}. {err.message}
      </div>,
      document.getElementById("root")
    );
    throw err;
  });

serviceWorker.register();
