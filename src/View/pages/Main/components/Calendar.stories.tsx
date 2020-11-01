import React from "react";
import Calendar from "./Calendar";
import CalendarVM from "../../../../ViewModels/CalendarVM";

export default {
  title: "Components/Calendar",
  component: Calendar,
};

const calendarApi = new CalendarVM();

export const CalendarComponent = () => <Calendar calendarApi={calendarApi} />;
