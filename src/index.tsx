import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Calendar from "./view/pages/Main";
import CalendarVm from "./ViewModels/Calendar/calendar.vm";
import { configure } from "mobx";
import DBClient from "./Clients/DBClient";

configure({ enforceActions: "observed" });

const calendarApi: ICalendarVM = new CalendarVm();
const dbClient: DBClient = new DBClient();

dbClient.init().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Calendar calendarApi={calendarApi} />
    </React.StrictMode>,
    document.getElementById("root")
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
