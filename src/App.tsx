import React from "react";
import Main from "./view/pages/Main";
import { useRoute } from "react-router5";
import { constants } from "router5";
import { IStorage } from "./storage/interfaces";

function App() {
  const {
    route: { name: routeName },
  } = useRoute();

  const { router } = useRoute();

  const storage: IStorage = router.getDependencies() as IStorage;

  console.log(storage);

  if (routeName === "main") return <Main calendarApi={storage.calendar} />;

  if (routeName === constants.UNKNOWN_ROUTE)
    return <div>Страница не найдена</div>;

  return <div>Страница не найдена</div>;
}

export default App;
