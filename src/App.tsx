import Main from "./View/pages/Main";
import { useRoute } from "react-router5";
import { constants } from "router5";
import { IStorage } from "./Storage/interfaces";

function App() {
  const {
    route: { name: routeName },
    router,
  } = useRoute();

  // TODO вынести в хук
  const { amount, calendar }: IStorage = router.getDependencies() as IStorage;

  if (routeName === "main")
    return <Main calendarApi={calendar} amountVM={amount} />;

  if (routeName === constants.UNKNOWN_ROUTE)
    return <div>Страница не найдена</div>;

  return <div>Страница не найдена</div>;
}

export default App;
