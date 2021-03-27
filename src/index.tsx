import { StrictMode } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { configure } from "mobx";
import App from "./App";
import { RouterProvider } from "react-router5";
import router from "./Routing/router";
import { clients, repositories } from "./Storage/storage";
import { TAppTheme } from "./DomainModels/UserDM/interfaces";

configure({ enforceActions: "observed" });

const theme: TAppTheme = "light";

const bodyEl = document.querySelector("body");
const statusBarMetaTag = document.querySelector('meta[name="theme-color"]');
const colorSchemeMetaTag = document.querySelector('meta[name="color-scheme"]');

bodyEl?.setAttribute("data-theme", theme);

const bodyBg = getComputedStyle(document.body).getPropertyValue("--body-bg");
statusBarMetaTag?.setAttribute("content", bodyBg);
colorSchemeMetaTag?.setAttribute("content", theme);

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
