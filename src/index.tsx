import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Main from "./view/pages/Main";
import CalendarVm from "./ViewModels/CalendarVM";
import { configure } from "mobx";
import DBClient from "./Clients/DBClient";

configure({ enforceActions: "observed" });

const calendarApi: ICalendarVM = new CalendarVm();
const dbClient: DBClient = new DBClient();

dbClient.init().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Main calendarApi={calendarApi} />
    </React.StrictMode>,
    document.getElementById("root")
  );
});

serviceWorker.register();
