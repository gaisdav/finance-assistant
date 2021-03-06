import Calendar from "./Calendar";
import { storage } from "../../../../Storage/storage";

export default {
  title: "Components/Calendar",
  component: Calendar,
};

const calendarApi = storage.calendar;

export const CalendarComponent = () => <Calendar calendarApi={calendarApi} />;
