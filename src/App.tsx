import Main from "./View/pages/Calendar";
import { useRoute } from "react-router5";
import { constants } from "router5";
import { IStorage } from "./Storage/interfaces";
import { startsWithSegment } from "router5-helpers";
import Profile from "./View/pages/Profile";

function App() {
  const {
    route: { name: routeName },
    router,
  } = useRoute();

  // TODO вынести в хук
  const {
    amount,
    calendar,
    user,
  }: IStorage = router.getDependencies() as IStorage;

  if (routeName === "main")
    return <Main calendarApi={calendar} amountVM={amount} />;

  if (startsWithSegment("profile")) return <Profile user={user} />;

  if (routeName === constants.UNKNOWN_ROUTE)
    return <div>Страница не найдена</div>;

  return <div>Страница не найдена</div>;
}

export default App;
