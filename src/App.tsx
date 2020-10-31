import React from "react";
import Main from "./view/pages/Main";
import CalendarVm from "./ViewModels/CalendarVM";
import { useRoute } from "react-router5";
import { constants } from "router5";

const calendarApi: ICalendarVM = new CalendarVm();

function App() {
  const {
    route: { name: routeName },
  } = useRoute();

  if (routeName === "main") return <Main calendarApi={calendarApi} />;

  if (routeName === constants.UNKNOWN_ROUTE)
    return <div>Страница не найдена</div>;

  return <div>Страница не найдена</div>;
}

export default App;
